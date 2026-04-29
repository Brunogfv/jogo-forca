const palavras = [
    "CASA", "CARRO", "BOLA", "GATO", "SOL", "MAR", "FLOR", "PÃO", "MESA", "CHUVA",
    "FOGO", "VENTO", "LUA", "PEIXE", "TERRA", "JANELA", "ESTRADA", "BICICLETA",
    "ESCRITA", "FELICIDADE", "RELGIO", "CACHORRO", "MULHER", "HOMEM", "AMIZADE",
    "ESCOLA", "TRABALHO", "NATUREZA", "ALEGRIA", "SILÊNCIO", "EXCEPCIONAL",
    "QUARTEIRÃO", "HORIZONTE", "PISCINA", "NAUSÉIA", "PSICÓLOGO", "CHURRASQUEIRA",
    "ALMOFADA", "MISTÉRIO", "RAPIDAMENTE", "ELEFANTE", "GIRAFA", "RINOCERONTE",
    "BORBOLETA", "TARTARUGA", "CHOCOLATE", "LARANJA", "MACARRÃO", "HAMBÚRGUER",
    "SANDUÍCHE", "ALEMANHA", "PORTUGAL", "BRASIL", "ARGENTINA", "JAPÃO", "MÉDICO",
    "ENGENHEIRO", "PROFESSOR", "ADVOGADO", "BOMBEIRO"
];

let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let palavraOculta = Array(palavraSecreta.length).fill("_");
let tentativas = 6;

document.getElementById("palavra").innerHTML = palavraOculta.join(" ");

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

    if (!letra) return;

    let acertou = false;

    for (let i = 0; i < palavraSecreta.length; i++) {
        if (normalizarLetra(palavraSecreta[i]) === letra) {
            palavraOculta[i] = letra;
            acertou = true;
        }
    }

    if (!acertou) {
        tentativas--;
    }

    document.getElementById("palavra").innerText = palavraOculta.join(" ");
    document.getElementById("tentativas").innerText = "Tentativas restantes: " + tentativas;

    if (palavraOculta.join("") === palavraSecreta) {
        document.getElementById("mensagem").innerText = "🎉 Você venceu!";
    }

    if (tentativas === 0) {
        document.getElementById("mensagem").innerText = "💀 Você perdeu! Palavra era: " + palavraSecreta;
    }
}