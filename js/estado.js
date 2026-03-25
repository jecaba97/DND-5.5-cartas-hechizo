// ==========================================
// 2. ESTADO GLOBAL DEL PERSONAJE Y SESIÓN
// ==========================================

let usuarioActual = sessionStorage.getItem('usuarioActual') || null;

function getPersonajeVacio() {
    return {
        id: null, username: usuarioActual,
        nombre: "", especie: "", trasfondo: "", clase: "Mago", 
        nivel: 1, hitDieType: 6, hitDiceMax: 1, hitDiceActual: 1, recursosClase: {},
        pb: 2, ca: 10, hpMax: 10, hpActual: 10, inspiracion: false,
        caManual: false, hpManual: false,
        atributos: { Fuerza: 10, Destreza: 10, Constitución: 10, Inteligencia: 10, Sabiduría: 10, Carisma: 10 },
        habilidadesProficientes: [], modificadoresHabilidades: {}, atributoMagico: "Inteligencia", salvacionesManuales: [],
        favoritos: [], equipo: [],
        slotsMax: { 1: 0 }, slotsActuales: { 1: 0 }
    };
}

let personaje = getPersonajeVacio();
// Si teníamos algo viejo en favs de localstorage lo cogemos (para no romper nada antes de usar la BD)
personaje.favoritos = JSON.parse(localStorage.getItem('hechizosFavoritos')) || [];

// Variables de control de la Interfaz (No se guardan en el JSON)
let listaActual = [];
let indiceActual = 0;
let modalBS;
let hechizosPorPagina = 20;
let cantidadMostrada = 20;
let filtroClaseHechizos = 'todos'; // UNIFICADO: Solo usaremos esta para el Grimorio

// --- AUTENTICACIÓN Y GESTIÓN DB ---

async function registrarNuevoUsuario() {
    const userIn = document.getElementById('login-user-reg').value.trim();
    const passIn = document.getElementById('login-pass-reg').value.trim();
    const errorDiv = document.getElementById('login-error');
    if (!userIn || !passIn) {
        errorDiv.textContent = "Por favor, introduce usuario y contraseña.";
        errorDiv.classList.remove('d-none');
        return;
    }
    try {
        await registrarUsuario(userIn, passIn);
        errorDiv.classList.add('d-none');
        alert("Usuario creado con éxito. Iniciando sesión...");
        await ejecutarLogin(userIn, passIn);
    } catch (e) {
        errorDiv.textContent = e;
        errorDiv.classList.remove('d-none');
    }
}

async function iniciarSesion() {
    const userIn = document.getElementById('login-user-login').value.trim();
    const passIn = document.getElementById('login-pass-login').value.trim();
    const errorDiv = document.getElementById('login-error');
    if (!userIn || !passIn) {
        errorDiv.textContent = "Por favor, introduce usuario y contraseña.";
        errorDiv.classList.remove('d-none');
        return;
    }
    try {
        await ejecutarLogin(userIn, passIn);
    } catch (e) {
        errorDiv.textContent = e;
        errorDiv.classList.remove('d-none');
    }
}

async function ejecutarLogin(user, pass) {
    const errorDiv = document.getElementById('login-error');
    try {
        const usuarioDB = await loginUsuario(user, pass);
        usuarioActual = usuarioDB.username;
        sessionStorage.setItem('usuarioActual', usuarioActual);
        errorDiv.classList.add('d-none');
        document.getElementById('login-user-login').value = "";
        document.getElementById('login-pass-login').value = "";
        document.getElementById('login-user-reg').value = "";
        document.getElementById('login-pass-reg').value = "";
        cambiarPantalla('pantalla-gestion');
    } catch (e) {
        errorDiv.textContent = e;
        errorDiv.classList.remove('d-none');
    }
}

function cerrarSesion() {
    usuarioActual = null;
    sessionStorage.removeItem('usuarioActual');
    personaje = getPersonajeVacio();
    cambiarPantalla('pantalla-home');
}

// --- GESTIÓN DE VISTAS DINÁMICAS ---

let listaPersonajesCache = []; // Para no llamar a DB cada segundo

async function cargarVistaGestion() {
    if (!usuarioActual) { cambiarPantalla('pantalla-home'); return; }
    const container = document.querySelector('#pantalla-gestion .row');
    container.innerHTML = '';
    try {
        listaPersonajesCache = await obtenerPersonajesUsuario(usuarioActual);
        listaPersonajesCache.forEach(p => {
            const card = document.createElement('div');
            card.className = 'col-md-5';
            card.innerHTML = `
                <div class="bg-secondary p-3 rounded shadow border border-gold cursor-pointer slot-personaje text-start position-relative d-flex align-items-center gap-3">
                    <div class="position-absolute top-0 end-0 m-2 d-flex gap-2" style="z-index: 5;">
                        <button class="btn btn-sm btn-danger py-0 px-2 fw-bold" onclick="borrarPj('${p.id}', event)" title="Borrar Personaje">X</button>
                    </div>
                    <div class="flex-shrink-0 position-relative" style="width: 60px; height: 60px; overflow: hidden; border-radius: 8px; border: 1px solid var(--dnd-gold);" onclick="event.stopPropagation(); document.getElementById('upload-avatar-${p.id}').click();" title="Click para cambiar Imagen">
                        ${p.avatar ? `<img src="${p.avatar}" class="w-100 h-100" style="object-fit: cover;">` : `<div class="w-100 h-100 bg-dark d-flex align-items-center justify-content-center text-muted" style="font-size:1.8rem;">👤</div>`}
                        <input type="file" id="upload-avatar-${p.id}" class="d-none" accept="image/*" onchange="cargarAvatarExterno(event, '${p.id}')">
                    </div>
                    <div class="flex-grow-1" onclick="seleccionarPersonajeParaJugar('${p.id}')">
                        <h4 class="text-gold mb-1" style="font-family: 'Cinzel';">${p.nombre || "Aventurero Anónimo"}</h4>
                        <p class="text-white small mb-0">${p.clase} ${p.especie || ""}</p>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        if (listaPersonajesCache.length < 4) {
            const btnCreate = document.createElement('div');
            btnCreate.className = 'col-md-5';
            btnCreate.innerHTML = `
                <div class="bg-dark p-4 rounded shadow border border-secondary cursor-pointer slot-personaje d-flex align-items-center justify-content-center"
                    onclick="crearNuevoPersonaje()" style="cursor: pointer; min-height: 104px;">
                    <h5 class="text-muted mb-0">+ Crear Nuevo Personaje</h5>
                </div>
            `;
            container.appendChild(btnCreate);
        }
    } catch (e) {
        console.error("Error cargando personajes", e);
    }
}

async function seleccionarPersonajeParaJugar(id) {
    const pjParams = listaPersonajesCache.find(p => p.id === id);
    if(pjParams) {
        personaje = { ...getPersonajeVacio(), ...pjParams };
        // Actualizamos la UI general para reflejar sus variables
        document.getElementById('char-name').value = personaje.nombre;
        if(document.getElementById('char-species')) document.getElementById('char-species').value = personaje.especie || "";
        
        const preview = document.getElementById('char-avatar-preview');
        if (preview) {
            if (personaje.avatar) {
                preview.innerHTML = `<img src="${personaje.avatar}" class="w-100 h-100" style="object-fit: cover;">`;
            } else {
                preview.innerHTML = "👤";
            }
        }
        if(document.getElementById('char-background')) document.getElementById('char-background').value = personaje.trasfondo || "";
        if(document.getElementById('setup-nivel')) document.getElementById('setup-nivel').value = personaje.nivel || 1;
        if(document.getElementById('setup-hp-actual')) document.getElementById('setup-hp-actual').value = personaje.hpActual;
        document.getElementById('setup-ca').value = personaje.ca;
        document.getElementById('setup-pb').value = personaje.pb;
        document.getElementById('setup-hp-max').value = personaje.hpMax;
        
        // localStorage.setItem('hechizosFavoritos', JSON.stringify(personaje.favoritos));
        document.querySelectorAll('.btn-clase-roller').forEach(b => {
            b.classList.toggle('active', b.dataset.clase === personaje.clase);
        });
        
        actualizarTemaWeb();
        actualizarUI();
        actualizarListaGestionEquipo();
        actualizarIndicadorInspiracion();
        renderizar();

        // Mostrar menú contextual
        abrirModalPersonaje();
    }
}

function crearNuevoPersonaje() {
    personaje = getPersonajeVacio();
    
    document.getElementById('char-name').value = "";
    if(document.getElementById('char-species')) document.getElementById('char-species').value = "";
    
    const preview = document.getElementById('char-avatar-preview');
    if (preview) preview.innerHTML = '👤';
    if(document.getElementById('char-background')) document.getElementById('char-background').value = "";
    if(document.getElementById('setup-nivel')) document.getElementById('setup-nivel').value = 1;
    if(document.getElementById('setup-hp-actual')) document.getElementById('setup-hp-actual').value = 10;
    document.getElementById('setup-ca').value = 10;
    document.getElementById('setup-pb').value = 2;
    document.getElementById('setup-hp-max').value = 10;
    
    // localStorage.setItem('hechizosFavoritos', JSON.stringify([]));
    document.querySelectorAll('.btn-clase-roller').forEach(b => {
        b.classList.toggle('active', b.dataset.clase === "Mago"); // Mago por defecto
    });
    
    actualizarTemaWeb();
    actualizarUI();
    actualizarListaGestionEquipo();
    actualizarIndicadorInspiracion();
    
    cambiarPantalla('pantalla-edicion');
}

async function borrarPj(id, event) {
    event.stopPropagation(); // Evitar que dispare seleccionarPersonajeParaJugar
    if(confirm("¿Estás seguro de que quieres borrar este personaje? Esta acción no se puede deshacer.")) {
        await eliminarPersonajeEnDB(id);
        cargarVistaGestion();
    }
}

// Para guardar cuando estemos en la pestaña de edición o partida
async function guardarPersonajeBD() {
    if(!usuarioActual) return;
    
    const inputNombre = document.getElementById('char-name');
    if (inputNombre) personaje.nombre = inputNombre.value;
    const inputEspecie = document.getElementById('char-species');
    if (inputEspecie) personaje.especie = inputEspecie.value;
    const inputTrasfondo = document.getElementById('char-background');
    if (inputTrasfondo) personaje.trasfondo = inputTrasfondo.value;
    
    // Nuevos datos de nivel y dados
    const inputNivel = document.getElementById('setup-nivel');
    if (inputNivel) { personaje.nivel = parseInt(inputNivel.value) || 1; personaje.hitDiceMax = personaje.nivel; }
    
    // El hitDieType ya no se lee del DOM, se vincula estructuralmente y se respeta el existente
    
    const inputPb = document.getElementById('setup-pb');
    if (inputPb) personaje.pb = parseInt(inputPb.value) || 2;
    const inputCa = document.getElementById('setup-ca');
    if (inputCa) personaje.ca = parseInt(inputCa.value) || 10;
    const inputHpMax = document.getElementById('setup-hp-max');
    if (inputHpMax) personaje.hpMax = parseInt(inputHpMax.value) || 10;
    const inputHpActual = document.getElementById('setup-hp-actual');
    if (inputHpActual) personaje.hpActual = parseInt(inputHpActual.value) || personaje.hpMax;

    try {
        const guardado = await guardarPersonajeEnDB(personaje, usuarioActual);
        personaje.id = guardado.id; // Nos aseguramos de mantener el ID en la RAM
        
        // Efecto visual rápido de guardado exitoso
        const saveBtn = document.getElementById('btn-guardar-db');
        if(saveBtn) {
            const txtOrig = saveBtn.innerText;
            saveBtn.innerText = "¡Guardado! ✅";
            saveBtn.classList.replace('btn-secondary', 'btn-success');
            setTimeout(() => {
                saveBtn.innerText = txtOrig;
                saveBtn.classList.replace('btn-success', 'btn-secondary');
            }, 2000);
        }
    } catch(e) {
        alert(e);
    }
}

// 6. GESTIÓN DE DATOS (JSON) Y EQUIPO
// ==========================================

// --- FUNCIONES DE EXPORTAR Y CARGAR JSON ---
function descargarPersonaje() {
    const inputNombre = document.getElementById('char-name');
    if (inputNombre) personaje.nombre = inputNombre.value;
    const inputEspecie = document.getElementById('char-species');
    if (inputEspecie) personaje.especie = inputEspecie.value;
    const inputTrasfondo = document.getElementById('char-background');
    if (inputTrasfondo) personaje.trasfondo = inputTrasfondo.value;
    
    const inputNivel = document.getElementById('setup-nivel');
    if (inputNivel) { personaje.nivel = parseInt(inputNivel.value) || 1; personaje.hitDiceMax = personaje.nivel; }
    
    // El hitDieType se conserva, no requiere sobreescribirse del dom
    
    const inputPb = document.getElementById('setup-pb');
    if (inputPb) personaje.pb = parseInt(inputPb.value) || 2;
    const inputCa = document.getElementById('setup-ca');
    if (inputCa) personaje.ca = parseInt(inputCa.value) || 10;
    const inputHpMax = document.getElementById('setup-hp-max');
    if (inputHpMax) personaje.hpMax = parseInt(inputHpMax.value) || 10;
    const inputHpActual = document.getElementById('setup-hp-actual');
    if (inputHpActual) personaje.hpActual = parseInt(inputHpActual.value) || personaje.hpMax;

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(personaje));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `${personaje.nombre || 'personaje'}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    document.body.removeChild(dlAnchor);
}

function cargarPersonaje(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const datosCargados = JSON.parse(e.target.result);

            personaje = {
                nombre: "", especie: "", trasfondo: "", clase: "Mago", 
                nivel: 1, hitDieType: 6, hitDiceMax: 1, hitDiceActual: 1, recursosClase: {},
                pb: 2, ca: 10, hpMax: 10, hpActual: 10, inspiracion: false,
                caManual: false, hpManual: false,
                ...datosCargados
            };

            personaje.atributos = { ...{ Fuerza: 10, Destreza: 10, Constitución: 10, Inteligencia: 10, Sabiduría: 10, Carisma: 10 }, ...(datosCargados.atributos || {}) };
            personaje.habilidadesProficientes = datosCargados.habilidadesProficientes || [];
            personaje.modificadoresHabilidades = datosCargados.modificadoresHabilidades || {};
            personaje.salvacionesManuales = datosCargados.salvacionesManuales || [];
            personaje.equipo = datosCargados.equipo || [];
            personaje.favoritos = datosCargados.favoritos || [];
            personaje.slotsMax = datosCargados.slotsMax || { 1: 0 };
            personaje.atributoMagico = datosCargados.atributoMagico || "Inteligencia";
            personaje.slotsActuales = datosCargados.slotsActuales || { 1: 0 };

            document.getElementById('char-name').value = personaje.nombre;
            if (document.getElementById('char-species')) document.getElementById('char-species').value = personaje.especie || "";
            if (document.getElementById('char-background')) document.getElementById('char-background').value = personaje.trasfondo || "";
            if(document.getElementById('setup-nivel')) document.getElementById('setup-nivel').value = personaje.nivel || 1;
            if(document.getElementById('setup-hp-actual')) document.getElementById('setup-hp-actual').value = personaje.hpActual;
            document.getElementById('setup-ca').value = personaje.ca;
            document.getElementById('setup-pb').value = personaje.pb;
            document.getElementById('setup-hp-max').value = personaje.hpMax;
            const selectMagico = document.getElementById('setup-attr-magico');
            if (selectMagico) selectMagico.value = personaje.atributoMagico;


            guardarPersonajeBD();

            document.querySelectorAll('.btn-clase-roller').forEach(b => {
                b.classList.toggle('active', b.dataset.clase === personaje.clase);
            });

            actualizarTemaWeb();
            actualizarUI();
            actualizarListaGestionEquipo();
            actualizarIndicadorInspiracion();
            renderizar();

            alert("¡Héroe cargado con éxito! ⚔️");
        } catch (error) {
            alert("Hubo un error al leer el archivo JSON.");
            console.error(error);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// --- FUNCIONES DE INSPIRACIÓN (Intactas) ---
function actualizarIndicadorInspiracion() {
    const avisos = [document.getElementById('aviso-inspiracion'), document.getElementById('aviso-inspiracion-actions')];
    avisos.forEach(aviso => { if (aviso) aviso.classList.toggle('d-none', !personaje.inspiracion); });

    const checks = [document.getElementById('check-inspiracion'), document.getElementById('check-inspiracion-actions')];
    checks.forEach(check => { if (check) check.checked = personaje.inspiracion; });
}

// --- FUNCIONES DE AUTOCÁLCULO DE ESTADÍSTICAS VITALES ---

function calcularCABaseOficial(clase, dexMod, conMod, wisMod) {
    if (clase === "Bárbaro") return 10 + dexMod + conMod;
    if (clase === "Monje") return 10 + dexMod + wisMod;
    if (clase === "Hechicero") return 10 + dexMod; // Si es Dracónico sería 13, pero de momento asume 10
    return 10 + dexMod;
}

function calcularHpBaseOficial(nivel, hitDieType, conMod) {
    if (nivel < 1) return 1;
    let hp = hitDieType + conMod; // Nivel 1 maximo de dado con constitucion
    if (nivel > 1) {
        const promedioDado = (hitDieType / 2) + 1;
        const hpPorNivel = Math.max(1, promedioDado + conMod);
        hp += hpPorNivel * (nivel - 1);
    }
    return Math.max(1, hp);
}

function calcularSlotsClase(clase, nivel) {
    let tabla = null;
    if (["Mago", "Hechicero", "Bardo", "Clérigo", "Druida"].includes(clase)) tabla = typeof progSlotsFullCaster !== 'undefined' ? progSlotsFullCaster : null;
    else if (["Paladín", "Explorador"].includes(clase)) tabla = typeof progSlotsMedioCaster !== 'undefined' ? progSlotsMedioCaster : null;
    else if (clase === "Brujo") tabla = typeof progSlotsBrujo !== 'undefined' ? progSlotsBrujo : null;

    if (tabla && tabla[nivel]) {
        return JSON.parse(JSON.stringify(tabla[nivel]));
    }
    return {};
}

function asignarRecursosClase(clase, nivel, attrs) {
    if (typeof plantillaRecursosClase !== 'undefined' && plantillaRecursosClase[clase]) {
        const recursosArr = plantillaRecursosClase[clase](nivel, attrs);
        const objRetorno = {};
        recursosArr.forEach(r => {
            objRetorno[r.id] = { ...r, currentUses: r.maxUses };
        });
        return objRetorno;
    }
    return {};
}

function sugerirEstadisticasBase(forzar = false) {
    const modDex = Math.floor(((personaje.atributos["Destreza"] || 10) - 10) / 2);
    const modCon = Math.floor(((personaje.atributos["Constitución"] || 10) - 10) / 2);
    const modWis = Math.floor(((personaje.atributos["Sabiduría"] || 10) - 10) / 2);

    const caBase = calcularCABaseOficial(personaje.clase, modDex, modCon, modWis);
    const hpBase = calcularHpBaseOficial(personaje.nivel, personaje.hitDieType, modCon);

    let huboCambios = false;

    if (!personaje.caManual || forzar) {
        personaje.ca = caBase;
        const inCa = document.getElementById('setup-ca');
        if (inCa) inCa.value = caBase;
        huboCambos = true;
    }

    if (!personaje.hpManual || forzar) {
        const delta = hpBase - personaje.hpMax;
        personaje.hpMax = hpBase;
        // Solo cambiamos la vida actual proporcionalmente al cambio máximo
        personaje.hpActual = Math.min(hpBase, Math.max(1, personaje.hpActual + delta)); 
        
        const inHpMax = document.getElementById('setup-hp-max');
        if (inHpMax) inHpMax.value = personaje.hpMax;
        
        const inHpAct = document.getElementById('setup-hp-actual');
        if (inHpAct) inHpAct.value = personaje.hpActual;
        huboCambos = true;
    }

    // --- RECURSOS Y SLOTS AUTOMÁTICOS ---
    const nuevosSlotsMax = calcularSlotsClase(personaje.clase, personaje.nivel);
    personaje.slotsMax = nuevosSlotsMax;
    if(!personaje.slotsActuales) personaje.slotsActuales = {};
    for (const lvl in nuevosSlotsMax) {
        if (personaje.slotsActuales[lvl] === undefined || personaje.slotsActuales[lvl] > nuevosSlotsMax[lvl]) {
            personaje.slotsActuales[lvl] = nuevosSlotsMax[lvl];
        }
    }

    const nuevosRecursos = asignarRecursosClase(personaje.clase, personaje.nivel, personaje.atributos);
    if (!personaje.recursosClase) personaje.recursosClase = {};
    for (const key in nuevosRecursos) {
        if (personaje.recursosClase[key]) {
            const usosGastados = personaje.recursosClase[key].maxUses - personaje.recursosClase[key].currentUses;
            nuevosRecursos[key].currentUses = Math.max(0, nuevosRecursos[key].maxUses - usosGastados);
        }
    }
    personaje.recursosClase = nuevosRecursos;

    if (typeof generarPanelSlotsSetup === 'function') generarPanelSlotsSetup();
    if(huboCambos || true) actualizarPestañaAcciones();
}

function resetearStatsAuto() {
    personaje.caManual = false;
    personaje.hpManual = false;
    sugerirEstadisticasBase(true);
    guardarPersonajeBD();
}

