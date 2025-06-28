const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Eventos
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarTweets); // Se crea un nuevo tweet

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    });
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
    formulario.reset() // Reiniciar formulario
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
    sincronizarStorage();
}

// Agregar los tweets Actuales localstorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}