
/*
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Enviando formulario...');
}) */


// Eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: '',
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de Submit
// Cuando trabajemos con formularios, es mejor utilizar el evento "submit"
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    // Validar el formulario
    const {nombre, email, mensaje} = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return; // Corta la ejecucion del codigo
    } 
        
    mostrarAlerta('Tus datos han sido enviados correctamente!🥳');
})

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    //console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    
    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('alerta');
    }
    
    formulario.appendChild(alerta);
    // Desaparezca despues de 5 seg
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
