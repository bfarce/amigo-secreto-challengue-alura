// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();
    
    // Validar si el campo de texto está vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Validar si el nombre ya existe
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado.');
        inputAmigo.value = '';
        return;
    }

    // Agregar el nombre al array y a la lista en el HTML
    amigos.push(nombreAmigo);
    let listaAmigos = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = nombreAmigo;
    listaAmigos.appendChild(li);

    // Limpiar el campo de texto
    inputAmigo.value = '';
}

function sortearAmigo() {
    // Validar si hay al menos dos nombres en la lista
    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para realizar el sorteo.');
        return;
    }

    // Seleccionar un amigo aleatoriamente
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores
    let h2 = document.createElement('h2');
    h2.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;
    resultado.appendChild(h2);
}