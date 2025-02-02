// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
function agregarAmigo() {
    //Añadir amigos a la consola
    let nuevoElemento = document.getElementById("amigo").value;
    amigos.push(nuevoElemento);
    //En caso de que el usuario no escriba nada
    if (nuevoElemento === "") {;
        alert("Por favor, inserte un nombre.");
    } else { 
        //Limpiar el valor del input
    document.getElementById("amigo").value = "";

    console.log(amigos);
    mostrarAmigos();
    }
}


function mostrarAmigos() {
    //Mostrar lista de amigos en la página
    let lista = document.getElementById("listaAmigos");
    
    //Limpiar valor
    lista.innerHTML= "";
    
    //Validación de amigos disponibles
    if (amigos.length === 0) {;
        let mensajeVacio = documento.createElement("li");
        mensajeVacio.textContent = "No hay amigos en la lista.";
        listaAmigos.appendChild(mensajeVacio);
    } else {
    //Ir escribiendo los amigos escritos por el usuario
    for (let i = 0; i < amigos.length; i++) {
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        lista.appendChild(nuevoAmigo);
        }
    };
}

function sortearAmigo() {
    //verificar si hay amigos en la lista nuevamente
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos disponibles para sortear.";
    } else {
        //se elige aleatoriamente un amigo
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        
        let amigoSorteado = amigos[indiceAleatorio];

        //se muestra el resultado en la página
        document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    //reiniciar el sorteo
    reiniciarLista();
    }
}
//para que el sorteo se reinicie
function reiniciarLista () {
    amigos = [];
    mostrarAmigos();
    document.getElementById("resultado").innerHTML ="";
}