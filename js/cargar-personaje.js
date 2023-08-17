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
        console.log(datisJson);
        // Encontrar el personaje en los datos del JSON
        const personaje = datosJson.find(p => p.name === nombre);

        if (personaje) {
            // Actualizar elementos en la plantilla HTML con los datos del personaje
            document.title = `${personaje.name} - Mobile Legends HQ`;

            const nombreElemento = document.querySelector('h2');
            const imagenElemento = document.querySelector('img');
            const descripcionElemento = document.querySelector('p');

            nombreElemento.textContent = personaje.name;
            imagenElemento.src = personaje.imgURL;
            imagenElemento.alt = personaje.heroid;
            descripcionElemento.textContent = personaje.historia;

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
