// ==========================================
// 3. NAVEGACIÓN SPA Y PANTALLAS
// ==========================================

function cambiarPantalla(pantallaId) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.pantalla').forEach(p => p.classList.add('d-none'));
    // Mostrar la seleccionada
    const target = document.getElementById(pantallaId);
    if(target) target.classList.remove('d-none');

    // Refrescar DB si vamos a Gestión
    if (pantallaId === 'pantalla-gestion') {
        cargarVistaGestion();
    }

    // Efectos colaterales necesarios al cambiar de pantalla
    actualizarTemaWeb();
    actualizarUI();
}

function mostrarVistaPartida(vista) {
    const vistas = ['roller', 'actions', 'spellbook'];
    
    vistas.forEach(v => {
        document.getElementById(`game-view-${v}`)?.classList.toggle('d-none', v !== vista);
        document.getElementById(`btn-partida-${v}`)?.classList.toggle('active', v === vista);
    });

    actualizarTemaWeb();
    actualizarUI();
}

// Lógica Temporal Modal Menú Personajes
let modalAccionPersonajeBS;
function abrirModalPersonaje() {
    if (!modalAccionPersonajeBS) {
        modalAccionPersonajeBS = new bootstrap.Modal(document.getElementById('modalAccionPersonaje'));
    }
    modalAccionPersonajeBS.show();
}

function cerrarModalYIr(pantallaId) {
    if (modalAccionPersonajeBS) {
        modalAccionPersonajeBS.hide();
    }
    cambiarPantalla(pantallaId);
}

// FUNCIÓN ÚNICA PARA EL TEMA VISUAL
function actualizarTemaWeb() {
    // 1. Limpiar todos los temas anteriores del body
    document.body.classList.forEach(c => {
        if (c.startsWith('tema-')) document.body.classList.remove(c);
    });

    // 2. Decidir qué clase manda:
    // Si estamos en el Grimorio y hay un filtro puesto, manda el filtro.
    // Si no, manda la clase de tu personaje.
    let claseParaTema = personaje.clase;

    // Comprobamos si la sección del grimorio es la que está visible
    const spellbookSec = document.getElementById('game-view-spellbook');
    if (spellbookSec && !spellbookSec.classList.contains('d-none') && filtroClaseHechizos !== 'todos') {
        claseParaTema = filtroClaseHechizos;
    }

    // 3. Aplicar el tema (limpiando tildes y poniendo en minúsculas)
    const temaFormateado = claseParaTema.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    document.body.classList.add(`tema-${temaFormateado}`);
}
// ==========================================
// 9. VISTA DE GALERÍA MÓVIL
// ==========================================
function cambiarVistaGrid(columnas) {
    const galeria = document.getElementById('galeria');
    const btn1 = document.getElementById('btn-vista-1');
    const btn2 = document.getElementById('btn-vista-2');

    if (!galeria) return;

    if (columnas === 1) {
        galeria.classList.remove('row-cols-2');
        galeria.classList.add('row-cols-1');
        btn1.classList.add('active');
        btn2.classList.remove('active');
    } else {
        galeria.classList.remove('row-cols-1');
        galeria.classList.add('row-cols-2');
        btn1.classList.remove('active');
        btn2.classList.add('active');
    }
}

