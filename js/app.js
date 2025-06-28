const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

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
    console.log('enviando');
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