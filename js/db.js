// ==========================================
// BASE DE DATOS LOCAL (IndexedDB)
// ==========================================

const DB_NAME = 'DumbosDB';
const DB_VERSION = 1;

let dbInstance = null;

// Inicializa o abre la base de datos
function initDB() {
    return new Promise((resolve, reject) => {
        if (dbInstance) {
            resolve(dbInstance);
            return;
        }

        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
            console.error("Error al abrir IndexedDB", event);
            reject("Error al acceder a la base de datos local.");
        };

        request.onsuccess = (event) => {
            dbInstance = event.target.result;
            resolve(dbInstance);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            // Almacén de usuarios: key = username
            if (!db.objectStoreNames.contains('usuarios')) {
                db.createObjectStore('usuarios', { keyPath: 'username' });
            }

            // Almacén de personajes: key = id, índice por username
            if (!db.objectStoreNames.contains('personajes')) {
                const storePersonajes = db.createObjectStore('personajes', { keyPath: 'id' });
                storePersonajes.createIndex('username', 'username', { unique: false });
            }
        };
    });
}

// ==========================================
// GESTIÓN DE USUARIOS
// ==========================================

async function registrarUsuario(username, password) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        // Primero comprobar si ya existe
        const txCheck = db.transaction('usuarios', 'readonly');
        const storeCheck = txCheck.objectStore('usuarios');
        const getRequest = storeCheck.get(username);

        getRequest.onsuccess = () => {
            if (getRequest.result) {
                reject("El usuario ya existe.");
                return;
            }

            // Si no existe, lo añadimos
            const tx = db.transaction('usuarios', 'readwrite');
            const store = tx.objectStore('usuarios');
            const userObj = {
                username: username,
                password: hashSimple(password), // Guardamos un hash muy simple (solo por estética técnica, sigue siendo local)
                fechaRegistro: new Date().toISOString()
            };

            const addRequest = store.add(userObj);

            addRequest.onsuccess = () => resolve(userObj);
            addRequest.onerror = () => reject("Error al registrar el usuario.");
        };
        getRequest.onerror = () => reject("Error al leer la base de datos.");
    });
}

async function loginUsuario(username, password) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('usuarios', 'readonly');
        const store = tx.objectStore('usuarios');
        const getRequest = store.get(username);

        getRequest.onsuccess = () => {
            const user = getRequest.result;
            if (!user) {
                reject("Usuario no encontrado.");
                return;
            }

            if (user.password === hashSimple(password)) {
                resolve(user);
            } else {
                reject("Contraseña incorrecta.");
            }
        };
        getRequest.onerror = () => reject("Error al acceder a los datos.");
    });
}

// Función hash muy básica (no segura criptográficamente real, solo para ofuscar un poco a la vista en Inspect Element)
function hashSimple(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(16);
}

// ==========================================
// GESTIÓN DE PERSONAJES
// ==========================================

async function guardarPersonajeEnDB(personajeObj, username) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('personajes', 'readwrite');
        const store = tx.objectStore('personajes');
        
        // Si no tiene ID, le generamos uno
        if (!personajeObj.id) {
            personajeObj.id = Date.now().toString() + Math.random().toString(36).substr(2, 5);
        }
        
        // Asegurarse de que el personaje esté enlazado al usuario
        personajeObj.username = username;

        const request = store.put(personajeObj);

        request.onsuccess = () => resolve(personajeObj);
        request.onerror = () => reject("Error al guardar el personaje.");
    });
}

async function obtenerPersonajesUsuario(username) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('personajes', 'readonly');
        const store = tx.objectStore('personajes');
        const index = store.index('username');
        
        const request = index.getAll(username);

        request.onsuccess = () => resolve(request.result || []);
        request.onerror = () => reject("Error al obtener los personajes.");
    });
}

async function eliminarPersonajeEnDB(id) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('personajes', 'readwrite');
        const store = tx.objectStore('personajes');
        const request = store.delete(id);

        request.onsuccess = () => resolve(true);
        request.onerror = () => reject("Error al eliminar el personaje.");
    });
}

// auto-init
initDB();
