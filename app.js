let ListaAmigos = [];
let numeroMaximo = 10;
let numeroMinimo = 3;


//Función para agregar los amigos
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
     //validamos que el nombre no esté vacío
     if (amigo === "") {
        alert("Debes ingresar un nombre por favor");
        return; //para que no siga ejecutando el código
    } else { 
        ListaAmigos.push(amigo); //agregamos el amigo a la lista
        document.getElementById('amigo').value = ""; //limpiamos el input
        console.log(ListaAmigos); //imprimimos la lista de amigos
        console.log(typeof(amigo)); //imprimimos el tipo de dato de amigo
        console.log(ListaAmigos.length); //imprimimos la longitud de la lista de amigos
    }
}

/*    
function agregarAmigo() {
    // Obtenemos el nombre del amigo
    let nombre = document.getElementById('amigo').value;
    
    //validamos que el nombre no esté vacío
    if (nombre === "") {
        alert("Debes ingresar un nombre por favor");
        return; //para que no siga ejecutando el código
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
