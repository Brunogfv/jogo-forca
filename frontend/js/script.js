// const palavras = [
//     "CASA", "CARRO", "BOLA", "GATO", "SOL", "MAR", "FLOR", "PÃO", "MESA", "CHUVA",
//     "FOGO", "VENTO", "LUA", "PEIXE", "TERRA", "JANELA", "ESTRADA", "BICICLETA",
//     "ESCRITA", "FELICIDADE", "RELÓGIO", "CACHORRO", "MULHER", "HOMEM", "AMIZADE",
//     "ESCOLA", "TRABALHO", "NATUREZA", "ALEGRIA", "SILÊNCIO", "EXCEPCIONAL",
//     "QUARTEIRÃO", "HORIZONTE", "PISCINA", "NAUSÉIA", "PSICÓLOGO", "CHURRASQUEIRA",
//     "ALMOFADA", "MISTÉRIO", "RAPIDAMENTE", "ELEFANTE", "GIRAFA", "RINOCERONTE",
//     "BORBOLETA", "TARTARUGA", "CHOCOLATE", "LARANJA", "MACARRÃO", "HAMBÚRGUER",
//     "SANDUÍCHE", "ALEMANHA", "PORTUGAL", "BRASIL", "ARGENTINA", "JAPÃO", "MÉDICO",
//     "ENGENHEIRO", "PROFESSOR", "ADVOGADO", "BOMBEIRO"
// ];

// let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
// let palavraOculta = Array(palavraSecreta.length).fill("_");
// let tentativas = 6;

// let pontuacao = 0;
// let letrasUsadas = [];


// document.getElementById("palavra").innerHTML = palavraOculta.join(" ");

let palavraSecreta = "";
let palavraOculta = [];
let tentativas = 6;
let pontuacao = 0;
let letrasUsadas = [];
let nomeJogador = "";

async function iniciarJogo() {
    nomeJogador = document.getElementById("nome").value;

    document.getElementById("telaInicial").style.display = "none";
    document.getElementById("jogo").style.display = "block";
    carregarRanking();

    await novaRodada();
}

async function novaRodada() {
    let res = await fetch("http://localhost:8080/api/jogo/palavra");
    palavraSecreta = await res.text();

    palavraOculta = Array(palavraSecreta.length).fill("_");
    tentativas = 6;
    letrasUsadas = [];
    document.getElementById("mensagem").innerText = "";

    atualizarTela();
}

function normalizarLetra(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();
}

function verificarLetra() {
    let input = document.getElementById("letra");
    let letra = normalizarLetra(input.value);
    input.value = "";

    // let letra = document.getElementById("letra").value.toLowerCase();
    // document.getElementById("letra").value = "";

    if (!letra || letrasUsadas.includes(letra)) return;

    letrasUsadas.push(letra);

    let acertou = false;

    for (let i = 0; i < palavraSecreta.length; i++) {
        if (normalizarLetra(palavraSecreta[i]) === letra) {
            palavraOculta[i] = palavraSecreta[i];
            acertou = true;
        }
    }

    if (!acertou) {
        tentativas--;
    }

    atualizarTela();


    if (palavraOculta.join("") === palavraSecreta) {
        document.getElementById("mensagem").innerText = "🎉 Você venceu!";
        pontuacao += 10;
        setTimeout(novaRodada, 1000);
    }

    if (tentativas === 0) {
        document.getElementById("mensagem").innerText = "💀 Você perdeu! A palavra era: " + palavraSecreta;
        pontuacao -= 5;
        setTimeout(novaRodada, 1000);
    }
}

function atualizarTela() {

    document.getElementById("palavra").innerText = palavraOculta.join(" ");
    document.getElementById("tentativas").innerText = "Tentativas: " + tentativas;
    document.getElementById("letrasUsadas").innerText = "Usadas: " + letrasUsadas.join(", ");
    document.getElementById("pontuacao").innerText = "Pontos: " + pontuacao;
}

async function finalizarJogo() {
    await fetch("http://localhost:8080/api/jogo/pontuacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nomeJogador, pontos: pontuacao })
    });
    carregarRanking();
}

async function carregarRanking() {
    let res = await fetch("http://localhost:8080/api/jogo/ranking");
    let ranking = await res.json();

    let lista = document.getElementById("ranking");
    lista.innerHTML = "";

    ranking.forEach(p => {
        let li = document.createElement("li");
        li.innerText = p.nome + " - " + p.pontos;
        lista.appendChild(li);
    });
}

// function reiniciar() {
//     pontuacao = 0;
//     iniciarNovaRodada();
// }