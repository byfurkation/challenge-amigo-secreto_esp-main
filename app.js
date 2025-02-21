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
}

// función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiamos la lista de amigos
    listaAmigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}



/*
//función para seleccionar un amigo de la lista al azar
function seleccionarAmigo() {
    let amigoSeleccionado = ListaAmigos[Math.floor(Math.random() * ListaAmigos.length)];
    document.getElementById('amigoSeleccionado').textContent = amigoSeleccionado;
}
   

 
    //validamos que el número de amigos no sea mayor al número máximo
    if (amigos.length >= numeroMaximo) {
        alert("No puedes agregar más amigos");
        return;
    }

    //validamos que el amigo no esté en la lista
    if (amigos.includes(nombre)) {
        alert("El amigo ya está en la lista");
        return;
    }


    //actualizamos la lista de amigos en la interfaz
    actualizarListaAmigos();
}
//función para actualizar la lista de amigos en la interfaz



//función para seleccionar un amigo de la lista al azar

//Condiciones iniciales
function condicionesIniciales()

*/
