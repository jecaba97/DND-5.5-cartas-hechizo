
// ==========================================
// 7. FUNCIONES DEL GRIMORIO (CORE)
// ==========================================

function renderizar(opcion) {
    const galeria = document.getElementById('galeria');
    const buscador = document.getElementById('buscadorNombre');
    if (!galeria || !buscador) return;

    const esCargaMas = (opcion === true);
    if (!esCargaMas) {
        galeria.innerHTML = '';
        cantidadMostrada = hechizosPorPagina;
    }

    // Obtenemos los niveles del slider
    const min = parseInt(document.getElementById('nivelMin')?.value || 0);
    const max = parseInt(document.getElementById('nivelMax')?.value || 9);

    // FILTRADO ROBUSTO
    listaActual = hechizos.filter(h => {
        const coincideNombre = h.nombre.toLowerCase().includes(buscador.value.toLowerCase());
        const coincideClase = filtroClaseHechizos === 'todos' || h.clase === filtroClaseHechizos;
        const coincideNivel = h.nivel >= min && h.nivel <= max;

        // CORRECCIÓN: Usar personaje.favoritos
        const coincideFav = !document.getElementById('filtroFavoritos').checked || personaje.favoritos.includes(h.id);

        return coincideNombre && coincideClase && coincideNivel && coincideFav;
    });

    // ORDENACIÓN
    const criterio = document.getElementById('ordenarPor')?.value;
    listaActual.sort((a, b) => (criterio === 'nivelAsc' ? a.nivel - b.nivel : a.nombre.localeCompare(b.nombre)));

    // DIBUJADO
    const fragmento = listaActual.slice(esCargaMas ? cantidadMostrada : 0, esCargaMas ? cantidadMostrada + hechizosPorPagina : cantidadMostrada);

    fragmento.forEach((h, i) => {
        const indexReal = esCargaMas ? cantidadMostrada + i : i;
        const esFav = personaje.favoritos.includes(h.id);
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card bg-dark border-secondary h-100 card-hechizo" onclick="abrirModal(${indexReal})">
                <img src="${h.archivo.startsWith('http') ? h.archivo : CLOUDINARY_BASE + h.archivo}" class="card-img-top img-spell" loading="lazy">
                <div class="card-body p-2 d-flex align-items-center justify-content-center gap-2">
                    <div class="btn-favorito-inline" onclick="event.stopPropagation(); toggleFavorito(${h.id})">
                        ${esFav ? '📖' : '📕'}
                    </div>
                    <small class="text-gold fw-bold">${h.nombre}</small>
                </div>
            </div>`;
        galeria.appendChild(col);
    });

    // Actualizar estados finales
    document.getElementById('btnCargarMas')?.classList.toggle('d-none', cantidadMostrada >= listaActual.length);
    const contador = document.getElementById('contador');
    if (contador) contador.innerText = `Hechizos: ${listaActual.length}`;
}

function toggleFavorito(id) {
    const index = personaje.favoritos.indexOf(id);
    if (index > -1) personaje.favoritos.splice(index, 1);
    else personaje.favoritos.push(id);
    guardarPersonajeBD();
    renderizar();
}

function copiarPreparados() {
    // 1. Obtener los nombres de los hechizos que coinciden con los IDs favoritos
    const nombresFavs = hechizos
        .filter(h => personaje.favoritos.includes(h.id))
        .map(h => h.nombre);

    if (nombresFavs.length === 0) {
        alert("No tienes hechizos preparados para copiar. 📖");
        return;
    }

    // 2. Unirlos en un texto separado por saltos de línea
    const textoACopiar = "MIS HECHIZOS PREPARADOS:\n" + nombresFavs.join("\n");

    // 3. Usar la API del portapapeles
    navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("¡Lista de hechizos copiada al portapapeles! 📋");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}

// ==========================================
// 8. MODAL Y SLIDER
// ==========================================

function abrirModal(index) { indiceActual = index; actualizarImagenModal(); modalBS.show(); }
function abrirModalPorId(id) {
    const index = hechizos.findIndex(h => h.id === id);
    if (index !== -1) { listaActual = hechizos; abrirModal(index); }
}
function actualizarImagenModal() {
    const h = listaActual[indiceActual];
    const img = document.getElementById('imgModal');
    img.src = (h.archivo.startsWith('http') ? h.archivo : CLOUDINARY_BASE + h.archivo).replace('w_400', 'w_1080');
}
function siguiente() { indiceActual = (indiceActual + 1) % listaActual.length; actualizarImagenModal(); }
function anterior() { indiceActual = (indiceActual - 1 + listaActual.length) % listaActual.length; actualizarImagenModal(); }

function actualizarSliderVisual() {
    const minInput = document.getElementById('nivelMin');
    const maxInput = document.getElementById('nivelMax');
    const track = document.querySelector('.slider-track');
    const texto = document.getElementById('valorRango');

    if (!minInput || !maxInput || !track) return;

    let minVal = parseInt(minInput.value);
    let maxVal = parseInt(maxInput.value);

    // Evitar que los deslizadores se crucen de forma inteligente
    if (minVal > maxVal) {
        if (document.activeElement === minInput) {
            minInput.value = maxVal; // Topamos el mínimo
            minVal = maxVal;
        } else {
            maxInput.value = minVal; // Topamos el máximo
            maxVal = minVal;
        }
    }

    const minP = (minVal / 9) * 100;
    const maxP = (maxVal / 9) * 100;

    track.style.left = minP + "%";
    track.style.width = (maxP - minP) + "%";

    if (texto) texto.innerText = `${minVal} - ${maxVal}`;
}

