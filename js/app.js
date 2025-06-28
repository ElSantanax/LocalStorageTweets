const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Eventos
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarTweets);
}

// Funciones 
function agregarTweets(e) {
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacio');
        return;
    }
    // Añadiendo al arreglo de tweets
    const tweetObj = {
        id: Date.now(),
        tweet
    }

    tweets = [...tweets, tweetObj];
    crearHTML(); // Crear el HTML
    formulario.resert() // Reiniciar formulario
}

function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertar contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

function crearHTML() {
    limpiarHTML();
    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            // Crear HTML
            const li = document.createElement('li');
            li.innerText = tweet.tweet.trim() // Añadir el texto
            listaTweets.appendChild(li); // Insertar en el HTML
        });
    }
}

// Limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild)
    }
}