let amigos = [];
let numeroMaximo = 10;
let numeroMinimo = 3;


//Función para agregar los amigos
function agregarAmigo() {
    const amigo = document.getElementById('amigo').value;
     //validamos que el nombre no esté vacío
     if (amigo === "") {
        alert("Por favor, inserte un nombre.");
        return; //para que no siga ejecutando el código
    } else { //si el nombre no está vacío
        amigos.push(amigo); //agregamos el amigo a la lista
        document.getElementById('amigo').value = ""; //limpiamos la caja de texto
        console.log(amigos); //imprimimos la lista de amigos
        console.log(typeof(amigo)); //imprimimos el tipo de dato de amigo
        console.log(amigos.length); //imprimimos la longitud de la lista de amigos
    }
    actualizarListaAmigos(); //actualizamos la lista de amigos en la interfaz
}

// función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiamos la lista de amigos
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//función para seleccionar un amigo de la lista al azar

function sortearAmigo() {
    if (amigos.length < 1 ) {  //validamos que la lista de amigos no esté vacía
        alert("No hay amigos en la lista");
        return;
    } else {
        const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').innerHTML = `Amigo secreto: ${amigoSeleccionado}`;
    }
}
