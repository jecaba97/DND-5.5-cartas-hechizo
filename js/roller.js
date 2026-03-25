// ==========================================
// 4. LÓGICA DEL ROLLER (ATRIBUTOS Y HABILIDADES)
// ==========================================

const acordeonesAbiertos = { setup: {}, roller: {} }; // Mantiene abiertos los desplegables al actualizar

function actualizarUI() {
    const rpb = document.getElementById('roller-pb');
    if (rpb) rpb.innerText = '+' + (personaje.pb || 2);

    generarAmbosPanelesAtributos();
    generarPanelSlotsSetup(); // Sincroniza los slots al actualizar
    actualizarPestañaAcciones();
}

function generarPanelSlotsSetup() {
    const container = document.getElementById('setup-slots-grid');
    if (!container) return;

    if (!personaje.slotsMax) personaje.slotsMax = {};

    let html = '';
    for (let i = 1; i <= 9; i++) {
        const max = personaje.slotsMax[i] || 0;
        html += `
        <div class="text-center bg-dark p-2 rounded border border-secondary shadow-sm" style="width: 75px;">
            <label class="form-label small text-info fw-bold mb-1 d-block" style="font-size: 0.75rem;">Nivel ${i}</label>
            <input type="number" class="form-control form-control-sm text-center fw-bold text-gold bg-black border-dark" 
                value="${max}" min="0" max="10" onchange="setSlotMax(${i}, this.value)">
        </div>`;
    }
    container.innerHTML = html;
}

function generarAmbosPanelesAtributos() {
    generarPanelAtributos('setup');
    generarPanelAtributos('roller');
}

function generarPanelAtributos(modo) {
    const isSetup = modo === 'setup';
    const gridId = isSetup ? 'setup-stats-grid' : 'stats-grid';
    const statsGrid = document.getElementById(gridId);
    if (!statsGrid) return;
    statsGrid.innerHTML = '';

    const atributos = ["Fuerza", "Destreza", "Constitución", "Inteligencia", "Sabiduría", "Carisma"];
    const salvacionesClase = competenciasClase[personaje.clase] || [];

    atributos.forEach(attr => {
        const esProficienteSalva = salvacionesClase.includes(attr) || (personaje.salvacionesManuales && personaje.salvacionesManuales.includes(attr));
        const habilidades = mapeoHabilidades[attr] || [];
        const tieneHabilidades = habilidades.length > 0;

        const cardAtributo = document.createElement('div');
        cardAtributo.className = 'card-atributo animacion-magica';

        // --- DIFERENCIA 1: Checkbox Editable vs Escudo Fijo ---
        let htmlSalvacion = isSetup
            ? `<input type="checkbox" class="form-check-input check-prof-hab m-0" 
                   id="check-save-${modo}-${attr}" ${esProficienteSalva ? 'checked' : ''}
                   onclick="event.stopPropagation(); toggleSalvacion('${attr}')">`
            : `<div class="text-center" style="width: 25px; font-size: 1.1rem;">${esProficienteSalva ? '🛡️' : ''}</div>`;

        // --- DIFERENCIA 2: Input de número vs Etiqueta Visual (Readonly) ---
        // Cálculo del modificador basado en D&D 5e
        const valorAttr = personaje.atributos[attr] || 10;
        const modAttr = Math.floor((valorAttr - 10) / 2);
        const modTexto = modAttr >= 0 ? '+' + modAttr : modAttr;

        // --- DIFERENCIA 2: Input de Puntos + Modificador fijo (Setup) vs Solo Modificador (Roller) ---
        let htmlValorAttr = isSetup
            ? `<div class="d-flex align-items-center gap-1">
                   <input type="number" value="${valorAttr}" min="1" max="30"
                       oninput="actualizarAtributoLocal('${attr}', this.value)" 
                       class="form-control form-control-sm text-center bg-dark text-light border-secondary p-0"
                       style="width: 42px; height: 32px; font-weight: bold; font-size: 0.95rem;" title="Puntuación base">
                   <div id="mod-${attr}" class="badge bg-black border border-secondary text-gold d-flex align-items-center justify-content-center shadow-sm" 
                       style="width: 35px; height: 32px; font-size: 0.9rem;" title="Modificador">${modTexto}</div>
               </div>`
            : `<div class="badge bg-dark border border-secondary text-gold d-flex align-items-center justify-content-center" 
                   style="width: 45px; height: 32px; font-size: 1rem;">${modTexto}</div>`;

        // --- DIFERENCIA 3: Botón de tirada (Solo en el Roller) ---
        let btnDadoAttr = isSetup ? '' : `<button class="btn btn-sm btn-primary py-1 px-2 btn-dice-large" onclick="event.stopPropagation(); lanzarD20('${attr}')">🎲</button>`;

        let htmlHabilidades = habilidades.map(hab => {
            const modExtra = (personaje.modificadoresHabilidades && personaje.modificadoresHabilidades[hab]) || 0;
            const esProfHab = personaje.habilidadesProficientes.includes(hab);

            let checkHab = isSetup
                ? `<input type="checkbox" class="form-check-input check-prof-hab m-0" 
                       id="check-${modo}-${hab}" ${esProfHab ? 'checked' : ''}
                       onchange="toggleCompetenciaHabilidad('${hab}')" style="width:16px; height:16px;">`
                : `<div style="width:12px; height:12px; display:inline-block; border-radius:50%; border:2px solid var(--dnd-gold); background-color:${esProfHab ? 'var(--dnd-gold)' : 'transparent'}"></div>`;

            let inputMod = isSetup
                ? `<input type="number" value="${modExtra}" 
                       class="form-control form-control-sm bg-dark text-gold border-secondary text-center px-1" 
                       style="width: 45px; height: 28px; font-weight: bold; font-size: 0.85rem;"
                       onchange="personaje.modificadoresHabilidades['${hab}'] = parseInt(this.value) || 0;">`
                : `<div class="badge bg-dark border border-secondary text-gold d-flex align-items-center justify-content-center" 
                       style="width: 35px; height: 25px; font-size: 0.85rem;">${modExtra >= 0 ? '+' + modExtra : modExtra}</div>`;

            let btnDadoHab = isSetup ? '' : `<button class="btn btn-sm p-0 px-1 text-gold" onclick="event.stopPropagation(); lanzarHabilidad('${hab}', '${attr}')" style="font-size: 1.2rem;">🎲</button>`;

            return `
            <div class="d-flex justify-content-between align-items-center py-2 border-bottom border-dark border-opacity-50">
                <div class="d-flex align-items-center gap-2">
                    ${checkHab}
                    <label class="form-check-label m-0" style="font-size: 0.8rem; color: ${esProfHab && !isSetup ? 'var(--dnd-gold)' : '#e0e0e0'}; font-weight: ${esProfHab && !isSetup ? 'bold' : 'normal'};" for="check-${modo}-${hab}">${hab}</label>
                </div>
                <div class="d-flex align-items-center gap-2">
                    ${inputMod}
                    ${btnDadoHab}
                </div>
            </div>`;
        }).join('');

        const isOpen = acordeonesAbiertos[modo] && acordeonesAbiertos[modo][attr];
        const altura = isOpen ? '500px' : '0px';
        const giro = isOpen ? 'rotate(90deg)' : 'rotate(0deg)';

        cardAtributo.innerHTML = `
            <div class="bg-secondary rounded p-2 px-3 shadow-sm ${isSetup ? '' : 'border-left-clase'}">
                <div class="d-flex justify-content-between align-items-center" style="min-height: 45px;">
                    <div class="d-flex align-items-center flex-grow-1" onclick="toggleAcordeon('${modo}', '${attr}')" style="cursor:pointer">
                        <div style="width: 30px;" class="text-center d-flex justify-content-center align-items-center me-1">
                            ${htmlSalvacion}
                        </div>
                        <span class="fw-bold text-uppercase small me-1" style="letter-spacing: 0.5px;">${attr}</span>
                        <div style="width: 20px;" class="text-gold small text-center" id="icon-${modo}-${attr}" style="transform: ${giro}; transition: transform 0.3s;">
                            ${tieneHabilidades ? '▶' : ''}
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-3">
                        ${htmlValorAttr}
                        ${btnDadoAttr}
                    </div>
                </div>
                <div id="skills-${modo}-${attr}" class="skills-accordion overflow-hidden" style="max-height: ${altura}; transition: max-height 0.3s ease-out;">
                    <div class="pt-2 mt-1 border-top border-dark border-opacity-50">
                        ${htmlHabilidades}
                    </div>
                </div>
            </div>`;
        statsGrid.appendChild(cardAtributo);
    });
}

function toggleAcordeon(modo, attr) {
    const content = document.getElementById(`skills-${modo}-${attr}`);
    const icon = document.getElementById(`icon-${modo}-${attr}`);
    if (!content) return;

    const isClosed = content.style.maxHeight === "0px" || content.style.maxHeight === "";
    if (isClosed) {
        content.style.maxHeight = "500px";
        if (icon) icon.style.transform = "rotate(90deg)";
        if (!acordeonesAbiertos[modo]) acordeonesAbiertos[modo] = {};
        acordeonesAbiertos[modo][attr] = true;
    } else {
        content.style.maxHeight = "0px";
        if (icon) icon.style.transform = "rotate(0deg)";
        if (!acordeonesAbiertos[modo]) acordeonesAbiertos[modo] = {};
        acordeonesAbiertos[modo][attr] = false;
    }
}

function toggleCompetenciaHabilidad(hab) {
    const index = personaje.habilidadesProficientes.indexOf(hab);
    if (index > -1) personaje.habilidadesProficientes.splice(index, 1);
    else personaje.habilidadesProficientes.push(hab);
    actualizarUI();
}

function toggleSalvacion(attr) {
    if (!personaje.salvacionesManuales) personaje.salvacionesManuales = [];
    const index = personaje.salvacionesManuales.indexOf(attr);
    if (index > -1) personaje.salvacionesManuales.splice(index, 1);
    else personaje.salvacionesManuales.push(attr);
    actualizarUI();
}
function actualizarAtributoLocal(attr, valor) {
    const val = parseInt(valor) || 10;
    personaje.atributos[attr] = val;
    const mod = Math.floor((val - 10) / 2);
    const modTexto = mod >= 0 ? '+' + mod : mod;

    const divMod = document.getElementById(`mod-${attr}`);
    if (divMod) divMod.innerText = modTexto;
    
    if (typeof sugerirEstadisticasBase !== 'undefined') {
        sugerirEstadisticasBase();
    }
}

// Motores de Tirada
function lanzarD20(attr) {
    const puntuacion = personaje.atributos[attr] || 10;
    const mod = Math.floor((puntuacion - 10) / 2); // Fórmula D&D

    // Verificamos si es proficiente por clase o por salvación manual
    const esProficiente = (competenciasClase[personaje.clase] && competenciasClase[personaje.clase].includes(attr)) ||
        (personaje.salvacionesManuales && personaje.salvacionesManuales.includes(attr));
    const pb = esProficiente ? personaje.pb : 0;

    ejecutarTirada(
        total => total + mod + pb,
        `Salvación ${attr}`,
        `${mod} (Mod) + ${pb} (PB)`
    );
}

function lanzarHabilidad(hab, attrPadre) {
    const puntuacion = personaje.atributos[attrPadre] || 10;
    const modAttr = Math.floor((puntuacion - 10) / 2); // Fórmula D&D

    const esProficiente = personaje.habilidadesProficientes.includes(hab);
    const pb = esProficiente ? personaje.pb : 0;

    const modExtra = (personaje.modificadoresHabilidades && personaje.modificadoresHabilidades[hab]) || 0;

    ejecutarTirada(
        total => total + modAttr + pb + modExtra,
        hab,
        `${modAttr} (${attrPadre}) + ${pb} (PB) + ${modExtra} (Extra)`
    );
}

function ejecutarTirada(calculoTotal, titulo, infoExtra) {
    const resultDivs = [document.getElementById('dice-result'), document.getElementById('dice-result-actions')];
    const logs = [document.getElementById('roll-log'), document.getElementById('roll-log-actions')];

    // Leemos los botones de ventaja de ambas pestañas
    const checkAdv = document.getElementById('check-advantage')?.checked || document.getElementById('check-adv-actions')?.checked;
    const checkDis = document.getElementById('check-disadvantage')?.checked || document.getElementById('check-dis-actions')?.checked;

    let d1 = Math.floor(Math.random() * 20) + 1;
    let d2 = Math.floor(Math.random() * 20) + 1;
    let dFinal = d1;
    let textoDados = `${d1}`;

    if (checkAdv) { dFinal = Math.max(d1, d2); textoDados = `Mayor de (${d1}, ${d2})`; }
    else if (checkDis) { dFinal = Math.min(d1, d2); textoDados = `Menor de (${d1}, ${d2})`; }

    const total = calculoTotal(dFinal);

    resultDivs.forEach(div => {
        if (div) {
            div.innerText = total;
            div.style.color = dFinal === 20 ? "#28a745" : (dFinal === 1 ? "#dc3545" : "var(--dnd-gold)");
        }
    });

    logs.forEach(log => {
        if (log) {
            const entrada = document.createElement('div');
            entrada.className = "border-bottom border-secondary py-2 animacion-magica";
            entrada.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-gold fw-bold text-uppercase" style="font-size: 0.8rem;">${titulo}</span>
                    <span class="badge bg-dark border border-gold" style="font-size: 1rem;">${total}</span>
                </div>
                <div class="small text-muted mt-1" style="font-size: 0.75rem;">
                    Dado: ${textoDados} + ${infoExtra}
                </div>
            `;
            log.prepend(entrada);
        }
    });
}

function limpiarLogTiradas() {
    const logs = [document.getElementById('roll-log'), document.getElementById('roll-log-actions')];
    const results = [document.getElementById('dice-result'), document.getElementById('dice-result-actions')];

    logs.forEach(log => { if (log) log.innerHTML = '<p class="text-muted small text-center mt-2">El historial de tiradas aparecerá aquí...</p>'; });
    results.forEach(res => { if (res) { res.innerText = '--'; res.style.color = 'var(--dnd-gold)'; } });
}

