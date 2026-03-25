// ==========================================
// 5. ACCIONES Y CONEXIÓN CON GRIMORIO
// ==========================================

function actualizarPestañaAcciones() {
    const contenedorAtaques = document.getElementById('lista-equipo');
    const panelConjuros = document.getElementById('panel-conjuros-contenido');

    // 1. Actualizar CA y HP (Igual que antes)
    const displayCa = document.getElementById('display-ca');
    if (displayCa) displayCa.innerText = `🛡️ ${personaje.ca || 10}`;
    const displayHp = document.getElementById('display-hp');
    if (displayHp) {
        displayHp.innerText = `${personaje.hpActual} / ${personaje.hpMax}`;
        displayHp.style.color = (personaje.hpActual <= personaje.hpMax / 4) ? "#ff0000" : "var(--dnd-bright-red)";
    }
    
    // Sincronizar el input de la vista de edición para evitar sobreescritos al guardar
    const inputHpActual = document.getElementById('setup-hp-actual');
    if (inputHpActual) inputHpActual.value = personaje.hpActual;
    const displayHd = document.getElementById('display-hd');
    if (displayHd) {
        displayHd.innerText = `Dados: ${personaje.hitDiceActual}/${personaje.hitDiceMax} (d${personaje.hitDieType})`;
    }

    // 2. Renderizar Ataques (Igual que antes)
    if (contenedorAtaques) {
        contenedorAtaques.innerHTML = personaje.equipo.length ? '' : '<p class="text-muted small text-center mt-3">Sin armas equipadas.</p>';
        personaje.equipo.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'card bg-dark border-secondary p-3 mb-3 shadow animacion-magica';
            const attrValor = personaje.atributos[item.atributo || "Fuerza"] || 10;
            const modAttr = Math.floor((attrValor - 10) / 2);

            const profClass = esClaseProficiente(personaje.clase, item.nombre);
            const esProf = profClass || item.esProficiente === true;

            const modAtk = modAttr + (esProf ? parseInt(personaje.pb || 2) : 0);
            const modDanio = modAttr + (parseInt(item.modDanio) || 0);

            const modAtkStr = modAtk >= 0 ? `+${modAtk}` : `${modAtk}`;
            const modDanioStr = modDanio >= 0 ? `+${modDanio}` : `${modDanio}`;
            const dPrinc = item.dado1 || item.daño || "1";

            let botonesDaño = `<button class="btn btn-sm btn-danger fw-bold shadow-sm" onclick="lanzarDaño(${index}, false)">Daño (${dPrinc}${modDanioStr}) 🩸</button>`;
            if (item.esVersatil && item.dado2 && item.dado2 !== "-") {
                botonesDaño += `<button class="btn btn-sm btn-outline-danger fw-bold shadow-sm ms-2" onclick="lanzarDaño(${index}, true)">2 Manos (${item.dado2}${modDanioStr}) 🩸</button>`;
            }

            const detalles = [];
            if (item.alcance) detalles.push(`Alcance: ${item.alcance}`);
            if (item.tipoDaño) detalles.push(item.tipoDaño);
            if (item.notas) detalles.push(`*${item.notas}*`);

            div.innerHTML = `
                <div class="d-flex justify-content-between align-items-start mb-1">
                    <h4 class="h6 text-gold mb-0 text-uppercase fw-bold">${item.nombre}</h4>
                    <span class="badge bg-black border border-secondary text-info shadow-sm py-1 px-2">ATK: ${modAtkStr}</span>
                </div>
                ${detalles.length > 0 ? `<small class="text-muted d-block mb-3" style="font-size: 0.8rem;">${detalles.join(' | ')}</small>` : ''}
                <div class="d-flex flex-wrap gap-2 border-top border-secondary border-opacity-50 pt-3">
                    <button class="btn btn-sm btn-primary fw-bold shadow-sm" onclick="lanzarAtaque(${index})">Atacar 🎲</button>
                    ${botonesDaño}
                </div>`;
            contenedorAtaques.appendChild(div);
        });
    }

    // 2.5 Renderizar Recursos de Clase
    const contenedorRecursos = document.getElementById('lista-recursos');
    if (contenedorRecursos) {
        contenedorRecursos.innerHTML = '';
        if (personaje.recursosClase && Object.keys(personaje.recursosClase).length > 0) {
            
            const tituloRes = document.createElement('h5');
            tituloRes.className = "text-gold mt-3 mb-2 border-bottom border-secondary pb-1";
            tituloRes.style.fontFamily = "Cinzel";
            tituloRes.innerText = "HABILIDADES Y RECURSOS";
            contenedorRecursos.appendChild(tituloRes);

            const gridRes = document.createElement('div');
            gridRes.className = "d-flex flex-wrap gap-2";

            for (const key in personaje.recursosClase) {
                const recurso = personaje.recursosClase[key];
                
                const btn = document.createElement('button');
                btn.className = `btn btn-sm ${recurso.currentUses > 0 ? 'btn-outline-info' : 'btn-outline-secondary'} d-flex align-items-center gap-2 shadow-sm rounded-pill fw-bold border-2`;
                btn.innerHTML = `
                    <span>${recurso.nombre}</span>
                    <span class="badge ${recurso.currentUses > 0 ? 'bg-info text-dark' : 'bg-secondary'} rounded-circle px-2 py-1">${recurso.currentUses}/${recurso.maxUses}</span>
                `;
                btn.onclick = () => usarRecursoClase(key);
                
                gridRes.appendChild(btn);
            }
            contenedorRecursos.appendChild(gridRes);
        }
    }

    // 3. Renderizar Grimorio y Slots
    if (panelConjuros) {

        // --- NUEVO: CABECERA DE ESTADÍSTICAS MÁGICAS ---
        const attrMagico = personaje.atributoMagico || "Inteligencia";
        const valAttrMagico = personaje.atributos[attrMagico] || 10;
        const modMagico = Math.floor((valAttrMagico - 10) / 2);
        const pbMagico = parseInt(personaje.pb || 2);

        const modAtaqueConjuro = modMagico + pbMagico;
        const cdSalvacion = 8 + modMagico + pbMagico;
        const modAtaqueStr = modAtaqueConjuro >= 0 ? `+${modAtaqueConjuro}` : `${modAtaqueConjuro}`;

        const statsMagicosHtml = `
            <div class="d-flex flex-wrap justify-content-center align-items-center gap-4 mb-4 p-3 bg-black rounded border border-info shadow-sm animacion-magica">
                <div class="text-center">
                    <span class="d-block small text-muted fw-bold mb-1" style="font-size:0.7rem; letter-spacing:1px;">ATAQUE DE CONJURO</span>
                    <button class="btn btn-sm btn-outline-info fw-bold fs-6 px-4" onclick="lanzarAtaqueConjuro()">ATK ${modAtaqueStr} 🎲</button>
                </div>
                <div class="border-start border-secondary h-100 d-none d-sm-block" style="min-height: 40px;"></div>
                <div class="text-center">
                    <span class="d-block small text-muted fw-bold mb-1" style="font-size:0.7rem; letter-spacing:1px;">CD DE SALVACIÓN</span>
                    <button class="btn btn-sm btn-outline-warning fw-bold fs-6 px-4" onclick="anunciarCDConjuro()">CD ${cdSalvacion} 📢</button>
                </div>
            </div>
        `;

        panelConjuros.innerHTML = statsMagicosHtml; // Insertamos la cabecera en lugar de vaciarlo a ''
        // -----------------------------------------------

        const preparados = hechizos.filter(h => personaje.favoritos.includes(h.id));

        // Agrupar conjuros por nivel
        const porNivel = {};
        preparados.forEach(h => {
            if (!porNivel[h.nivel]) porNivel[h.nivel] = [];
            porNivel[h.nivel].push(h);
        });

        if (!personaje.slotsMax) personaje.slotsMax = { 1: 0 };
        if (!personaje.slotsActuales) personaje.slotsActuales = { 1: 0 };

        // Renderizar del Nivel 0 al 9
        for (let i = 0; i <= 9; i++) {
            const tieneConjuros = porNivel[i] && porNivel[i].length > 0;
            const tieneSlotsDefinidos = (personaje.slotsMax[i] || 0) > 0;

            if (tieneConjuros || tieneSlotsDefinidos || (i === 0 && tieneConjuros)) {
                if (i === 0 && !tieneConjuros) continue;

                const divNivel = document.createElement('div');
                divNivel.className = 'mb-4 bg-black p-3 rounded border border-secondary shadow-sm';

                // HEADER DEL NIVEL CON GESTOR DE SLOTS (LIMPIO)
                let headerHtml = `<h4 class="h6 text-gold border-bottom border-secondary pb-2 mb-3 text-uppercase">`;
                if (i === 0) {
                    headerHtml += `Trucos (Nivel 0)</h4>`;
                } else {
                    const maxSlots = personaje.slotsMax[i] || 0;
                    const actual = personaje.slotsActuales[i] || 0;
                    headerHtml += `
                        <div class="d-flex justify-content-between align-items-center">
                            <span>Nivel ${i}</span>
                            <div class="d-flex align-items-center gap-2" style="font-size: 0.85rem;">
                                <span class="text-muted small d-none d-sm-inline">Slots:</span>
                                <button class="btn btn-sm btn-outline-info py-0 px-2 fw-bold" onclick="cambiarSlot(${i}, -1)">-</button>
                                <span class="text-light fw-bold mx-1 text-center" style="min-width: 45px;">
                                    <span class="fs-5 text-info">${actual}</span> <span class="text-muted">/ ${maxSlots}</span>
                                </span>
                                <button class="btn btn-sm btn-outline-info py-0 px-2 fw-bold" onclick="cambiarSlot(${i}, 1)">+</button>
                            </div>
                        </div></h4>`;
                }

                // GRID DE CONJUROS
                let gridHtml = `<div class="row row-cols-2 g-2">`;
                if (tieneConjuros) {
                    porNivel[i].forEach(h => {
                        gridHtml += `
                            <div class="col">
                                <div class="card bg-dark border-info p-2 h-100 shadow-sm animacion-magica" style="cursor:pointer" onclick="abrirModalPorId(${h.id})">
                                    <div class="small text-info fw-bold text-uppercase text-center" style="font-size: 0.75rem; letter-spacing:0.5px;">${h.nombre}</div>
                                </div>
                            </div>`;
                    });
                } else {
                    gridHtml += `<div class="col-12"><p class="text-muted small mb-0 text-center">Sin conjuros preparados de nivel ${i}.</p></div>`;
                }
                gridHtml += `</div>`;

                divNivel.innerHTML = headerHtml + gridHtml;
                panelConjuros.appendChild(divNivel);
            }
        }
    }
}

// Funciones de Vida
function cambiarHP(cantidad) {
    personaje.hpActual = Math.min(personaje.hpMax, Math.max(0, personaje.hpActual + cantidad));
    actualizarPestañaAcciones();
    // Guardamos tras perder o ganar HP automáticamente
    guardarPersonajeBD();
}

function siHpSuperaMaximo() {
    if (personaje.hpActual > personaje.hpMax) {
        personaje.hpActual = personaje.hpMax;
    }
}

// ==========================================
// FUNCIONES DE RECURSOS DE CLASE
// ==========================================

function usarRecursoClase(key) {
    if (!personaje.recursosClase || !personaje.recursosClase[key]) return;
    
    const recurso = personaje.recursosClase[key];
    if (recurso.currentUses > 0) {
        recurso.currentUses--;
        actualizarPestañaAcciones();
        guardarPersonajeBD();
        anunciarLogDescanso("🌟 Habilidad Usada", `Has gastado 1 uso de <b>${recurso.nombre}</b>. Te quedan ${recurso.currentUses}.`);
    } else {
        alert(`No te quedan usos de ${recurso.nombre}. Debes tomar un descanso (${recurso.resetType === 'short' ? 'Corto o Largo' : 'Largo'}) para recuperarlos.`);
    }
}

// ==========================================
// FUNCIONES DE DESCANSO
// ==========================================
function descansoLargo() {
    if (personaje.hpActual <= 0) {
        alert("💥 No puedes tomar un descanso largo si estás a 0 HP.");
        return;
    }

    // Curación total
    personaje.hpActual = personaje.hpMax;
    
    // Recuperar la mitad de los dados de golpe (Mínimo 1)
    const recuperarDados = Math.max(1, Math.floor(personaje.hitDiceMax / 2));
    personaje.hitDiceActual = Math.min(personaje.hitDiceMax, personaje.hitDiceActual + recuperarDados);

    // Recuperar Slots de magia
    if (personaje.slotsMax && personaje.slotsActuales) {
        for (let nivel = 1; nivel <= 9; nivel++) {
            if (personaje.slotsMax[nivel]) {
                personaje.slotsActuales[nivel] = personaje.slotsMax[nivel];
            }
        }
    }

    // Recuperar recursosClase específicos si los hubiera ('long' y 'short')
    if (personaje.recursosClase) {
        for (const key in personaje.recursosClase) {
            if (personaje.recursosClase[key].resetType === 'long' || personaje.recursosClase[key].resetType === 'short') {
                personaje.recursosClase[key].currentUses = personaje.recursosClase[key].maxUses;
            }
        }
    }

    actualizarPestañaAcciones();
    guardarPersonajeBD();
    
    anunciarLogDescanso("⛺ Descanso Largo", "HP devolvido a tope. Se recuperan ranuras de conjuros y la mitad del máximo de dados de golpe.");
    alert("⛺ Has tomado un Descanso Largo reparador. Vuelves a la acción.");
}

function descansoCortoUI() {
    if (personaje.hitDiceActual <= 0) {
        alert("No te quedan Dados de Golpe para gastar en este Descanso Corto.");
        return;
    }
    const input = prompt(`☕ DESCANSO CORTO\n¿Cuántos Dados de Golpe quieres gastar para curarte?\n\nDisponibles: ${personaje.hitDiceActual} (d${personaje.hitDieType})\nEscribe un número:`, "1");
    if (input === null) return; // Cancelado
    const dados = parseInt(input);
    if (!isNaN(dados) && dados > 0) {
        ejecutarDescansoCorto(dados);
    } else {
        alert("Cantidad de dados gastados inválida.");
    }
}

function ejecutarDescansoCorto(dadosToSpend) {
    if (dadosToSpend > personaje.hitDiceActual) {
        alert(`💥 No tienes suficientes dados. Tienes ${personaje.hitDiceActual}.`);
        return;
    }

    let totalHeal = 0;
    const conMod = Math.floor(((personaje.atributos["Constitución"] || 10) - 10) / 2);
    let rolls = [];

    for (let i = 0; i < dadosToSpend; i++) {
        const d = Math.floor(Math.random() * personaje.hitDieType) + 1;
        const curacionGarantizada = Math.max(1, d + conMod);
        totalHeal += curacionGarantizada;
        rolls.push(d);
        personaje.hitDiceActual--;
    }

    const hpAntes = personaje.hpActual;
    personaje.hpActual = Math.min(personaje.hpMax, personaje.hpActual + totalHeal);
    const curaReal = personaje.hpActual - hpAntes;

    // Recuperar recursos ('short')
    if (personaje.recursosClase) {
        for (const key in personaje.recursosClase) {
            if (personaje.recursosClase[key].resetType === 'short') {
                personaje.recursosClase[key].currentUses = personaje.recursosClase[key].maxUses;
            }
        }
    }

    actualizarPestañaAcciones();
    guardarPersonajeBD();

    anunciarLogDescanso("☕ Descanso Corto", `Gasto de ${dadosToSpend}d${personaje.hitDieType}. Tiradas: [${rolls.join(', ')}] + Mod CON. <br><b>Curación útil: +${curaReal} HP.</b>`);
}

function anunciarLogDescanso(titulo, descripcion) {
    const logs = [document.getElementById('roll-log'), document.getElementById('roll-log-actions')];
    logs.forEach(log => {
        if (log) {
            const colorClass = titulo.includes("Largo") ? "primary" : "info";
            const entrada = document.createElement('div');
            entrada.className = `border-bottom border-${colorClass} border-opacity-50 py-2 animacion-magica`;
            entrada.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-${colorClass} fw-bold text-uppercase" style="font-size: 0.8rem;">${titulo}</span>
                </div>
                <div class="small text-muted mt-1" style="font-size: 0.75rem;">
                    ${descripcion}
                </div>
            `;
            log.prepend(entrada);
        }
    });
}

// ==========================================
// FUNCIONES DE CONTROL DE SLOTS Y PESTAÑAS (NUEVO)
// ==========================================

function toggleCombateTab(tab) {
    const pAtaques = document.getElementById('panel-ataques');
    const pConjuros = document.getElementById('panel-conjuros');
    const btnAtaques = document.getElementById('btn-tab-ataques');
    const btnConjuros = document.getElementById('btn-tab-conjuros');

    if (tab === 'ataques') {
        pAtaques.classList.remove('d-none'); pConjuros.classList.add('d-none');
        btnAtaques.classList.add('active'); btnConjuros.classList.remove('active');
    } else {
        pAtaques.classList.add('d-none'); pConjuros.classList.remove('d-none');
        btnAtaques.classList.remove('active'); btnConjuros.classList.add('active');
    }
}

function cambiarSlot(nivel, cantidad) {
    const max = personaje.slotsMax[nivel] || 0;
    let actual = personaje.slotsActuales[nivel] || 0;
    personaje.slotsActuales[nivel] = Math.min(max, Math.max(0, actual + cantidad));
    actualizarPestañaAcciones();
}

function setSlotMax(nivel, valor) {
    if (!personaje.slotsMax) personaje.slotsMax = {};
    if (!personaje.slotsActuales) personaje.slotsActuales = {};

    const max = Math.max(0, parseInt(valor) || 0);
    personaje.slotsMax[nivel] = max;

    // Si al bajar el máximo, los actuales son mayores, los recortamos
    if ((personaje.slotsActuales[nivel] || 0) > max) {
        personaje.slotsActuales[nivel] = max;
    }
}

// Funciones de Tiradas de Combate
function lanzarAtaque(index) {
    const item = personaje.equipo[index];
    const atributo = item.atributo || "Fuerza";
    const puntuacion = personaje.atributos[atributo] || 10;
    const mod = Math.floor((puntuacion - 10) / 2);

    const profClass = esClaseProficiente(personaje.clase, item.nombre);
    const esProf = profClass || item.esProficiente === true;

    const pb = esProf ? parseInt(personaje.pb || 2) : 0;
    const modTexto = pb > 0 ? `${mod} (${atributo}) + ${pb} (PB)` : `${mod} (${atributo})`;

    // Usamos la función global de d20 que ya gestiona ventajas
    ejecutarTirada(total => total + mod + pb, `Ataque: ${item.nombre}`, modTexto);
}

function lanzarDaño(index, esDosManos) {
    const item = personaje.equipo[index];
    const dadoStr = esDosManos ? item.dado2 : (item.dado1 || item.daño || "1");
    const atributo = item.atributo || "Fuerza";
    const puntuacion = personaje.atributos[atributo] || 10;
    const modAttr = Math.floor((puntuacion - 10) / 2);
    const modExtra = parseInt(item.modDanio) || 0;
    const modTotal = modAttr + modExtra;

    let cantDados = 1;
    let carasDado = 0;

    // Detectar formato (ej: "2d6", "1d8", o "1" plano de la cerbatana)
    if (dadoStr.includes('d')) {
        const partes = dadoStr.split('d');
        cantDados = parseInt(partes[0]) || 1;
        carasDado = parseInt(partes[1]) || 20;
    } else {
        cantDados = parseInt(dadoStr) || 1;
        carasDado = 0; // Indicador de daño plano
    }

    const tipoStr = item.tipoDaño ? ` [${item.tipoDaño}]` : "";
    const titulo = `${item.nombre}${tipoStr}`;
    const infoMod = modExtra !== 0 ? `Mod ${atributo}: ${modAttr} | Extra: ${modExtra}` : `Mod ${atributo}: ${modAttr}`;

    ejecutarTiradaDaño(cantDados, carasDado, modTotal, titulo, infoMod);
}

// Motor Especial para Daño (No usa d20 ni ventaja)
function ejecutarTiradaDaño(cantDados, carasDado, modTotal, titulo, infoExtra) {
    const resultDivs = [document.getElementById('dice-result'), document.getElementById('dice-result-actions')];
    const logs = [document.getElementById('roll-log'), document.getElementById('roll-log-actions')];

    let sumaDados = 0; let textoDados = [];

    if (carasDado > 0) {
        for (let i = 0; i < cantDados; i++) {
            const tirada = Math.floor(Math.random() * carasDado) + 1;
            sumaDados += tirada; textoDados.push(tirada);
        }
    } else { sumaDados = cantDados; textoDados.push(cantDados); }

    const totalFinal = Math.max(0, sumaDados + modTotal);

    resultDivs.forEach(div => {
        if (div) { div.innerText = totalFinal; div.style.color = "var(--dnd-bright-red)"; }
    });

    logs.forEach(log => {
        if (log) {
            const carasStr = carasDado > 0 ? `d${carasDado}` : "Plano";
            const tiradasStr = carasDado > 0 ? `(${textoDados.join(' + ')})` : `${sumaDados}`;
            const modStr = modTotal >= 0 ? `+ ${modTotal}` : `- ${Math.abs(modTotal)}`;

            const entrada = document.createElement('div');
            entrada.className = "border-bottom border-danger border-opacity-50 py-2 animacion-magica";
            entrada.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-danger fw-bold text-uppercase" style="font-size: 0.8rem;">Daño: ${titulo}</span>
                    <span class="badge bg-dark border border-danger text-danger" style="font-size: 1rem;">${totalFinal}</span>
                </div>
                <div class="small text-muted mt-1" style="font-size: 0.75rem;">
                    [${cantDados}${carasStr}] ${tiradasStr} ${modStr} <br>${infoExtra}
                </div>
            `;
            log.prepend(entrada);
        }
    });
}

// Funciones de Magia
function lanzarAtaqueConjuro() {
    const attr = personaje.atributoMagico || "Inteligencia";
    const valAttr = personaje.atributos[attr] || 10;
    const mod = Math.floor((valAttr - 10) / 2);
    const pb = parseInt(personaje.pb || 2);

    // Usa la función de tirada principal (con ventajas y desventajas sincronizadas)
    ejecutarTirada(total => total + mod + pb, `Ataque Mágico`, `Mod ${attr}: ${mod} + PB: ${pb}`);
}

function anunciarCDConjuro() {
    const attr = personaje.atributoMagico || "Inteligencia";
    const valAttr = personaje.atributos[attr] || 10;
    const mod = Math.floor((valAttr - 10) / 2);
    const pb = parseInt(personaje.pb || 2);
    const cd = 8 + mod + pb;

    // Imprimimos la alerta directamente en ambos historiales
    const logs = [document.getElementById('roll-log'), document.getElementById('roll-log-actions')];
    logs.forEach(log => {
        if (log) {
            const entrada = document.createElement('div');
            entrada.className = "border-bottom border-warning border-opacity-50 py-2 animacion-magica";
            entrada.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-warning fw-bold text-uppercase" style="font-size: 0.8rem;">📢 CD de Salvación</span>
                    <span class="badge bg-dark border border-warning text-warning fs-6 px-2">${cd}</span>
                </div>
                <div class="small text-muted mt-1" style="font-size: 0.75rem;">
                    Exiges superación de CD ${cd} <br>
                    [Base: 8 + Mod ${attr}: ${mod} + PB: ${pb}]
                </div>
            `;
            log.prepend(entrada);
        }
    });
}

// ==========================================
// --- NUEVAS FUNCIONES DE EQUIPO ---
function cargarOpcionesArmasPredefinidas() {
    const select = document.getElementById('select-armas-predefinidas');
    if (!select) return;
    select.innerHTML = '<option value="" disabled selected>Selecciona un arma...</option>'; // Limpiar antes de cargar
    listaArmasPredefinidas.forEach((arma, index) => {
        const option = document.createElement('option');
        option.value = index;
        const dSecTexto = arma.esVersatil ? ` / ${arma.dado2}` : "";
        option.text = `${arma.nombre} (${arma.dado1}${dSecTexto} - ${arma.tipoDaño})`;
        select.add(option);
    });
}

function toggleSubmenúEquipo(opción) {
    const contenedorElegir = document.getElementById('contenedor-elegir-arma');
    const contenedorCrear = document.getElementById('contenedor-crear-arma');
    const btnElegir = document.getElementById('btn-elegir-arma');
    const btnCrear = document.getElementById('btn-crear-arma');

    btnElegir.classList.remove('active');
    btnCrear.classList.remove('active');

    if (opción === 'elegir') {
        contenedorElegir.classList.remove('d-none');
        contenedorCrear.classList.add('d-none');
        btnElegir.classList.add('active');
    } else {
        contenedorElegir.classList.add('d-none');
        contenedorCrear.classList.remove('d-none');
        btnCrear.classList.add('active');
    }
}

function agregarArmaPredefinida() {
    const select = document.getElementById('select-armas-predefinidas');
    const index = select.value;
    if (index === "") { alert("Por favor, selecciona un arma de la lista. 📜"); return; }

    const arma = { ...listaArmasPredefinidas[index], modDanio: 0 };
    delete arma.esProficiente;
    personaje.equipo.push(arma);
    select.value = "";
    actualizarListaGestionEquipo();
}

function agregarEquipo() {
    const nombre = document.getElementById('eq-nombre').value;
    const alcance = document.getElementById('eq-alcance').value || "C/C";
    const atributo = document.getElementById('eq-attr').value;
    const esProficiente = document.getElementById('eq-proficiente').checked;
    const esVersatil = document.getElementById('eq-versatil').checked;
    const dado1 = document.getElementById('eq-dado1').value;
    const dado2 = document.getElementById('eq-dado2').value;
    const modDanio = parseInt(document.getElementById('eq-mod').value) || 0;
    const notas = document.getElementById('eq-notas').value;

    if (!nombre) { alert("Por favor, rellena el nombre del arma. ⚔️"); return; }

    personaje.equipo.push({
        nombre, alcance, atributo, esProficiente, esVersatil, dado1,
        dado2: esVersatil ? dado2 : "-", modDanio, notas, tipoDaño: "Manual"
    });

    document.getElementById('eq-nombre').value = '';
    document.getElementById('eq-alcance').value = '';
    document.getElementById('eq-notas').value = '';
    document.getElementById('eq-mod').value = '0';
    document.getElementById('eq-versatil').checked = false;
    document.getElementById('eq-dado2').disabled = true;

    actualizarListaGestionEquipo();
}

function actualizarListaGestionEquipo() {
    const lista = document.getElementById('lista-gestion-equipo');
    if (!lista) return;

    lista.innerHTML = personaje.equipo.map((item, i) => {
        const dPrinc = item.dado1 || item.daño || "1d4";
        const dSec = item.esVersatil && item.dado2 && item.dado2 !== "-" ? ` / ${item.dado2}` : "";

        const profBase = esClaseProficiente(personaje.clase, item.nombre);
        const manualProf = item.esProficiente === true;
        const isChecked = profBase || manualProf;
        const titleBadge = profBase ? 'Competencia de Clase (Automática)' : 'Competencia Manual (Clic para alternar)';

        const iconContainerClass = `prof-toggle ${isChecked ? 'prof-active' : 'prof-inactive'} ${profBase ? 'prof-locked' : ''}`;
        const iconChar = isChecked ? '+' : '&times;';
        const textColor = isChecked ? 'success' : 'danger';

        const badgeProf = `
            <div class="d-flex align-items-center gap-1 ms-2" title="${titleBadge}">
                <div class="${iconContainerClass}" 
                     ${profBase ? '' : `onclick="personaje.equipo[${i}].esProficiente = !${manualProf}; actualizarPestañaAcciones(); actualizarListaGestionEquipo();"`}>
                    <span style="margin-top: ${isChecked ? '-1px' : '-2px'};">${iconChar}</span>
                </div>
                <small class="text-${textColor} fw-bold" style="font-size: 0.6rem;">PROF.</small>
            </div>
        `;

        const notasDiv = item.notas ? `<div class="mt-1"><small class="text-info" style="font-size: 0.75rem;">* ${item.notas}</small></div>` : "";
        const modDiv = item.modDanio && item.modDanio !== 0 ? ` (+${item.modDanio})` : "";
        const tDañoBadge = item.tipoDaño ? `<span class="badge bg-secondary text-light bg-opacity-25">${item.tipoDaño}</span>` : "";

        return `
        <div class="d-flex justify-content-between align-items-center bg-dark rounded border border-secondary p-2 shadow-sm w-100">
            <div class="d-flex flex-column flex-grow-1">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="text-gold fw-bold text-uppercase d-flex align-items-center">
                        ${item.nombre} ${badgeProf}
                    </span>
                    <span class="badge bg-black text-light border border-secondary">${item.alcance || "C/C"}</span>
                </div>
                <div class="d-flex flex-wrap gap-2 align-items-center">
                    <span class="badge bg-secondary text-light bg-opacity-25">${item.atributo || "Fuerza"}</span>
                    <span class="badge bg-danger text-light bg-opacity-25">Daño: ${dPrinc}${dSec}${modDiv}</span>
                    ${tDañoBadge}
                </div>
                ${notasDiv}
            </div>
            <div class="ms-3 d-flex align-items-center border-start border-secondary ps-3">
                <button class="btn btn-outline-danger btn-sm rounded-circle d-flex align-items-center justify-content-center" 
                        style="width: 32px; height: 32px; font-size: 1.2rem; line-height: 1;" 
                        onclick="personaje.equipo.splice(${i}, 1); actualizarListaGestionEquipo();" 
                        title="Eliminar arma">&times;</button>
            </div>
        </div>
    `}).join('');
}
