//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesListaAmigos = [];

function adicionarAmigo() {
   let inputAmigo = document.getElementById('amigo');
   let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;
    }

// Adicionar a lista e Limpar o campo de nomes

    nomesListaAmigos.push(nomeAmigo);
    inputAmigo.value = ""; 
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
   let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    nomesListaAmigos.forEach(amigo => {
       let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (nomesListaAmigos.length < 2) {
        alert("Adicione pelo menos dois nomesListaAmigos para realizar o sorteio.");
        return;
    }

// Limpa o resultado anterior:
   
    let amigosSorteados = [...nomesListaAmigos];
   let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; 

// Realiza o sorteio:

    for (let i = 0; i < nomesListaAmigos.length; i++) {
       let amigoAtual = nomesListaAmigos[i];
        let amigoSorteado;

        do {
           let indiceSorteado = Math.floor(Math.random() * amigosSorteados.length);
            amigoSorteado = amigosSorteados[indiceSorteado];
        } while (amigoSorteado === amigoAtual || amigoSorteado === undefined);

        amigosSorteados.splice(amigosSorteados.indexOf(amigoSorteado), 1);

// Adicionar resultado a lista <ul>

       let itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigoAtual} tirou ${amigoSorteado}`;
        resultado.appendChild(itemResultado);
    }
}


