let amigos = []; //array para almacenar los amigos

//Función para agregar los amigos
function agregarAmigo() {
    const amigo = document.getElementById('amigo').value; //obtenemos el nombre del amigo
     //validamos que el nombre no esté vacío
     if (amigo === "") {
        alert("Por favor, inserte un nombre."); //mostramos un mensaje de alerta si el nombre está vacío
        return; //para que no siga ejecutando el código
    } else { //si el nombre no está vacío
        amigos.push(amigo); //agregamos el amigo a la lista
        document.getElementById('amigo').value = ""; //limpiamos la caja de texto
    }
    actualizarListaAmigos(); //actualizamos la lista de amigos en la interfaz
}

// función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos"); //obtenemos el elemento de la lista
    lista.innerHTML = ""; //limpiamos la lista de amigos
    for (let i = 0; i < amigos.length; i++) { //recorremos la lista de amigos
        const li = document.createElement("li"); //creamos un elemento de lista
        li.textContent = amigos[i]; //agregamos el nombre del amigo al elemento de lista
        lista.appendChild(li); //agregamos el elemento de lista a la lista de amigos
    }
}

//función para seleccionar un amigo de la lista al azar

function sortearAmigo() {
    if (amigos.length < 1 ) {  //validamos que la lista de amigos no esté vacía
        alert("No hay amigos en la lista"); //mostramos un mensaje de alerta si la lista de amigos está vacía
        return;
    } else {
        const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)]; //Se almacena el indice aleatorio en la constante.
        document.getElementById('resultado').innerHTML = `Amigo secreto: ${amigoSeleccionado}`; //Se imprime en pantalla el amigo seleccionado.
    }
}
