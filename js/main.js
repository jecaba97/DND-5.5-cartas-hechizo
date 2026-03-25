// ==========================================
// 10. INICIALIZACIÓN Y EVENTOS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    modalBS = new bootstrap.Modal(document.getElementById('modalHechizo'));

    // Inicialización
    if (sessionStorage.getItem('usuarioActual')) {
        usuarioActual = sessionStorage.getItem('usuarioActual');
        cambiarPantalla('pantalla-gestion');
    } else {
        cambiarPantalla('pantalla-home');
    }
    mostrarVistaPartida('roller');
    actualizarSliderVisual();
    actualizarUI();
    renderizar();
    actualizarIndicadorInspiracion();
    cargarOpcionesArmasPredefinidas();

    // EVENTOS DE FILTRO DE HECHIZOS (GRIMORIO)
    document.querySelectorAll('.btn-clase').forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Gestión estética de los botones
            document.querySelectorAll('.btn-clase').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Actualizar la variable de filtro
            filtroClaseHechizos = btn.dataset.clase;

            // 3. Ejecutar funciones
            renderizar();        // Filtra y dibuja las cartas
            actualizarTemaWeb();  // Cambia el color de la web según el filtro
        });
    });

    // EVENTO DE VACIADO DE HECHIZOS PREPARADOS
    document.getElementById('btnVaciarPreparados').addEventListener('click', () => {
        if (confirm("¿Seguro que quieres borrar todos tus hechizos preparados? 📕")) {
            // 1. Limpiar el array dentro del objeto personaje
            personaje.favoritos = [];

            // 2. Sincronizar con la Base de Datos
            guardarPersonajeBD();

            // 3. Refrescar la interfaz
            renderizar();
            actualizarPestañaAcciones(); // Para que también se borren de la pestaña de combate
        }
    });

    // Eventos de Clase de Personaje (Roller y Setup)
    document.querySelectorAll('.btn-clase-roller').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.btn-clase-roller').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            personaje.clase = btn.dataset.clase;
            if (typeof dadosDeGolpeClase !== 'undefined') {
                personaje.hitDieType = dadosDeGolpeClase[personaje.clase] || 8;
            }
            if (typeof sugerirEstadisticasBase !== 'undefined') {
                sugerirEstadisticasBase();
            }

            // REINICIAR salvaciones manuales para que coincidan con la nueva clase por defecto
            personaje.salvacionesManuales = [];

            actualizarTemaWeb(); // Usar la función unificada que arreglamos antes
            actualizarUI();
        });
    });

    // Evento para el botón de copiar
    document.getElementById('btnCopiar')?.addEventListener('click', copiarPreparados);

    document.getElementById('btnVaciarPreparados')?.addEventListener('click', () => {
        if (confirm("¿Seguro que quieres borrar todos tus hechizos preparados? 📕")) {
            personaje.favoritos = [];
            guardarPersonajeBD();
            renderizar();
            actualizarPestañaAcciones();
        }
    });

    // Botón de Ver Preparados
    document.getElementById('filtroFavoritos').addEventListener('change', () => renderizar());

    // --- SINCRONIZACIÓN MAGISTRAL DE VENTAJA Y DESVENTAJA ---
    const adv1 = document.getElementById('check-advantage');
    const dis1 = document.getElementById('check-disadvantage');
    const adv2 = document.getElementById('check-adv-actions');
    const dis2 = document.getElementById('check-dis-actions');

    function syncChecks(origen, destino, rival1, rival2) {
        if (origen) {
            origen.addEventListener('change', () => {
                if (destino) destino.checked = origen.checked; // Copia el estado a la otra pestaña
                if (origen.checked) {
                    if (rival1) rival1.checked = false;        // Apaga la desventaja si pones ventaja
                    if (rival2) rival2.checked = false;
                }
            });
        }
    }

    syncChecks(adv1, adv2, dis1, dis2);
    syncChecks(adv2, adv1, dis1, dis2);
    syncChecks(dis1, dis2, adv1, adv2);
    syncChecks(dis2, dis1, adv1, adv2);

    // Eventos Limpiar Log Sincronizados
    document.getElementById('btn-limpiar-log')?.addEventListener('click', limpiarLogTiradas);
    document.getElementById('btn-limpiar-log-actions')?.addEventListener('click', limpiarLogTiradas);

    // Evento Botón Buscador Nombre Hechizos
    document.getElementById('buscadorNombre').addEventListener('input', () => renderizar());

    // EVENTOS DE LOS DESLIZADORES DE NIVEL
    const minIn = document.getElementById('nivelMin');
    const maxIn = document.getElementById('nivelMax');

    if (minIn && maxIn) {
        minIn.addEventListener('input', () => {
            actualizarSliderVisual();
            renderizar();
        });
        maxIn.addEventListener('input', () => {
            actualizarSliderVisual();
            renderizar();
        });
    }

    // Evento Botón Cargar Más
    document.getElementById('btnCargarMas').onclick = () => {
        cantidadMostrada += hechizosPorPagina;
        renderizar(true);
    };

    // Evento Limpiar Filtros
    document.getElementById('btnLimpiar').addEventListener('click', () => {
        document.getElementById('buscadorNombre').value = '';
        document.getElementById('nivelMin').value = 0;
        document.getElementById('nivelMax').value = 9;
        document.getElementById('filtroFavoritos').checked = false;
        document.getElementById('ordenarPor').value = 'nombreAsc';

        filtroClaseHechizos = 'todos';

        document.querySelectorAll('.btn-clase').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-clase="todos"]')?.classList.add('active');

        actualizarSliderVisual();
        actualizarTemaWeb();
        renderizar();
    });

});

// ==========================================
// AVATAR DEL PERSONAJE
// ==========================================
function cargarAvatar(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 1024 * 1024) { // 1MB Max
            alert("La imagen es demasiado grande. El tamaño máximo es 1MB.");
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64Avatar = e.target.result;
            personaje.avatar = base64Avatar;
            const preview = document.getElementById('char-avatar-preview');
            if (preview) {
                preview.innerHTML = `<img src="${base64Avatar}" class="w-100 h-100" style="object-fit: cover;">`;
            }
            if (typeof guardarPersonajeBD === 'function') guardarPersonajeBD();
        }
        reader.readAsDataURL(file);
    }
}

async function cargarAvatarExterno(event, localId) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 1024 * 1024) { 
            alert("La imagen es demasiado grande. El tamaño máximo es 1MB.");
            return;
        }
        const reader = new FileReader();
        reader.onload = async function(e) {
            const base64Avatar = e.target.result;
            
            const pjParams = listaPersonajesCache.find(p => p.id === localId);
            if(pjParams) {
                pjParams.avatar = base64Avatar;
                
                // Si el jugador justo ha clicado este PJ en la ficha antes de hacer click aquí
                if (personaje && personaje.id === localId) {
                    personaje.avatar = base64Avatar;
                    const preview = document.getElementById('char-avatar-preview');
                    if (preview) preview.innerHTML = `<img src="${base64Avatar}" class="w-100 h-100" style="object-fit: cover;">`;
                }

                if (typeof guardarPersonajeEnDB === 'function' && typeof usuarioActual !== 'undefined') {
                     await guardarPersonajeEnDB(pjParams, usuarioActual);
                }
                
                if (typeof cargarVistaGestion === 'function') {
                     cargarVistaGestion();
                }
            }
        }
        reader.readAsDataURL(file);
    }
}

