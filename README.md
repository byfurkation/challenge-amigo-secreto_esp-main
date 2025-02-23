![portada_readme_amigoSecreto 2](https://github.com/user-attachments/assets/20444e1a-e211-4730-a3a2-a965b63299b6)

<h1 align="center"> Implementación del juego "Amigo Secreto" en JavaScript </h1>

<img alt="Static Badge" src="https://img.shields.io/badge/Oracle-%20Alura-blue?style=flat&labelColor=red"> <img alt="Static Badge" src="https://img.shields.io/badge/Released_Date-February%202025-blue?style=plastic&labelColor=white">

##Índice

*[Título e imagen de portada](#Título-e-imagen-de-portada)

*[Insignias](#insignias)

*[Índice](#índice)

*[Descripción del proyecto](#descripción-del-proyecto)

*[Estado del proyecto](#Estado-del-proyecto)

*[Características de la aplicación y demostración](#Características-de-la-aplicación-y-demostración)

*[Acceso al proyecto](#acceso-proyecto)

*[Tecnologías utilizadas](#tecnologías-utilizadas)

*[Personas Contribuyentes](#personas-contribuyentes)

*[Personas-Desarrolladores del Proyecto](#personas-desarrolladores)

* [Licencia](#licencia)

*[Conclusión](#conclusión)


<h1 align="center"> Descripción del Proyecto </h1> 
Proyecto concluido, el cual consiste en la implementación del juego de nombre “Amigo Secreto” desarrollado en el lenguaje de programación llamado JavaScript. 

El objetivo del juego es ingresar nombres de amigos en una caja de la interfaz, esto mediante la captura por teclado del nombre y el clic en el botón de nombre "Añadir". El usuario podrá visualizar el nombre de los amigos ingresados debajo de la la caja de texto en la cual los está capturando. Una vez que el usuario ha introducido los nombres que considera pertinentes, procede a sortear aleatoriamente uno de los mismos mediante el clic en el botón “Sortear Amigo”. Enseguida debajo de la lista aparecerá el nombre del amigo sorteado. 
![11  muestra de funcionamiento](https://github.com/user-attachments/assets/fef9431a-73ba-4936-aaed-99eab257738a)

<h1 align="center"> Estado del proyecto </h1> 
El proyecto cumple con los requisitos básicos, sin embargo, es susceptible de que se le puedan agregar diversas funcionalidades. Tu imaginación es el límite. 

<h1 align="center"> Demostración de funciones y aplicaciones </h1> 

## :hammer:Funcionalidades del proyecto
1️⃣ - `Función para agregar amigos`: Se inicia declarando una variable let de tipo array llamada amigos, la cual almacenará los nombres de los amigos ingresados.

A continuación, `se desarrolla una función llamada agregarAmigo`, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente. Dichos nombres serán agregados capturando el valor del campo de entrada, el cual Utilizó "document.getElementById" para obtener el texto ingresado por el usuario. 
![4  caja texto](https://github.com/user-attachments/assets/7c410d10-baa7-4310-af57-b25ce2565b7b)


`Después se valida la entrada`, para asegurarse de que el campo no esté vacío. Si está vacío se muestra un alert con un mensaje de error: "Por favor, inserte un nombre."
![5  alerta agrega nombre](https://github.com/user-attachments/assets/b7284616-0d97-4fdc-a7af-6d052b14bef2)

Después se `actualiza el array de amigos`, si el valor es válido, se añade al arreglo que almacena los nombre de amigos usando el método.push(). 

Finalmente `se limpia el campo de entrada`, lo cual ocurre después de añadir el nombre, se restablece el campo de texto a una cadena vacía.

![1  funcion agregar amigos](https://github.com/user-attachments/assets/281c69e8-6dc6-4aa1-90af-b087354c0b59)

2️⃣ - `Función para actualizar la lista de amigos`: Se crea una función que recorre el array de amigos y agregua cada nombre como un elemento li dentro de una lista HTML. Se usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

`Se obtiene el elemento de la lista`, se utiliza document.getElementById() para seleccionar la lista donde se mostrarán los amigos.

`Se Limpia la lista existente`, se establece lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

`Se iterea sobre el arreglo`, se usa un bucle for para recorrer el arreglo amigos y crear elementos de lista li para cada título.

`Se agregan elementos a la lista`, Para cada amigo, se crea un nuevo elemento de lista.

![2  función actualizar](https://github.com/user-attachments/assets/fba5d24e-9472-40c2-acf8-e080144afec8)

![6  se agregan nombres a lista en pantalla](https://github.com/user-attachments/assets/6ee4dc6a-60af-4641-a643-b0b59d9de34c)

3️⃣ - `Función para sortear los amigos`: Se escribe una función que selecciona de manera aleatoria uno de los nombres almacenados en el array amigos, usando Math.random() y Math.floor() para obtener un índice aleatorio.

`Se valida que haya amigos disponibles`, antes de sortear, se comprueba que el array de amigos no está vacío, caso contrario nos arrojará una alerta "no hay amigos en la lista". 

![8  alert no amigos lista](https://github.com/user-attachments/assets/f51c8751-777a-4294-af62-62575184b7db)

Gracias`Se genera un índice aleatorio`, usando Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

`Se obtiene el nombre sorteado`, usando el índice aleatorio para acceder al nombre correspondiente en el arreglo.

`Se muestra el resultado`, actualizando el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.

![3  funion sortear](https://github.com/user-attachments/assets/0ee118a2-3340-4b3e-b07f-2d7b768dfc27)

![9  juego funcionando](https://github.com/user-attachments/assets/71967555-6449-47c2-9d87-0789718f2bfe)

<h1 align="center"> Acceso al proyecto </h1> 
📁 Acceso al proyecto
Para ingresar el repositorio del proyecto del juego “Amigo Secreto”, se puede acceder a través de cualquier navegador web con el siguiente link: https://github.com/byfurkation/challenge-amigo-secreto_esp-main.git. 

![10  repositorio link](https://github.com/user-attachments/assets/9154aea6-41a7-4f9c-8b3d-cec676c0ee4d)

En caso de querer descargar el el proyecto, existen diversas opciones a las cuales se puede acceder en link antes proveído. Se debe dar clic sobre el botón con la leyenda "Code", para lo cual se desplegará una lista de opciones, la cual se muestra a continuación. 

![11  opciones descargas](https://github.com/user-attachments/assets/7a469a2c-7689-4683-81f0-82a153cefcb4)

Para descargarlo y utilizarlo se puede utilizar el método clone mediante la línea de comando, abriéndolo con github deskopt o descargandolo en un archivo zip, cualquiera de las tres están en la lista mencionada anteriormente. 

<h1 align="center"> Tecnologías utilizadas </h1> 
- javascript.
- github, manejo de repositorio mediante la línea de comandos. 
- Archivo mark Down.

<h1 align="center"> Desarrollador del Proyecto </h1> 

| [<img src="https://https://avatars.githubusercontent.com/u/194540551?s=400&u=592c64b1345758166e82cd056657f33d5c9a1be0&v=4" width=115><br><sub>Camila Fernanda Alves</sub>](https://github.com/camilafernanda) |  [<img src="https://avatars.githubusercontent.com/u/71970858?v=4" width=115><br><sub>Ellen Pimentel</sub>]([https://github.com/guilhermeonrails](https://github.com/ellenpimentel)) |  [<img src="https://avatars.githubusercontent.com/u/91544872?v=4" width=115><br><sub>Génesys Rondón</sub>](https://github.com/genesysaluralatam) |
| :---: | :---: | :---: |



<h1 align="center"> Licencia </h1> 
