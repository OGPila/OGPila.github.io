
// Función para manejar el parpadeo y cambio de tamaño suave del botón
function parpadearBoton(boton) {
    setInterval(() => {
        // Cambia el tamaño del botón con una transición suave
        boton.style.transition = 'transform 0.5s ease-in-out';

        // Alterna entre escala 1 y 1.2
        boton.style.transform = boton.style.transform === 'scale(1)' ? 'scale(1.2)' : 'scale(1)';
    }, 1000); // Cambiado a 1000ms (1 segundo) para una mejor experiencia visual
}

// Función principal que se ejecuta cuando el DOM está completamente cargado
function main() {
    const boton = document.getElementById('parpadeante');

    if (boton) {
        // Llama a la función de parpadeo si el botón existe
        parpadearBoton(boton);
    } else {
        console.error('El botón con el ID "parpadeante" no fue encontrado.');
    }
}

// Vincula la función principal al evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', main);
