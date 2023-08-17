// Obtener el nombre del personaje desde la URL
const urlParams = new URLSearchParams(window.location.search);
const nombrePersonaje = urlParams.get('nombre');

// Función para cargar y mostrar la información del personaje
function cargarInfoPersonaje(nombre) {
    // Leer el archivo heroes.json y almacenar la información en la variable datosJson
    fetch('../json/heroes.json')
      .then(response => response.json())
      .then(data => {
        const datosJson = data;

        // Buscar el personaje en los datos del JSON
        let personajeEncontrado = null;
        for (const personaje of datosJson) {
            if (personaje.name === nombre) {
                personajeEncontrado = personaje;
                console.log(personajeEncontrado)
                break;
            }
        }

        if (personajeEncontrado) {
            // Actualizar elementos en la plantilla HTML con los datos del personaje
            document.title = `${personajeEncontrado.name} - Mobile Legends HQ`;

            const nombreElemento = document.querySelector('h2');
            const imagenElemento = document.querySelector('img');
            const descripcionElemento = document.querySelector('p');

            nombreElemento.textContent = personajeEncontrado.name;
            imagenElemento.src = personajeEncontrado.imgURL;
            imagenElemento.alt = personajeEncontrado.heroid;
            descripcionElemento.textContent = personajeEncontrado.historia;

            // Puedes agregar más actualizaciones de elementos aquí según tus necesidades
        } else {
            console.error('No se encontró el personaje:', nombre);
        }
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Cargar información del personaje al cargar la página
window.addEventListener('load', () => {
    cargarInfoPersonaje(nombrePersonaje);
});
