# Jogo da Forca

Projeto simples de Jogo da Forca desenvolvido com HTML, CSS e JavaScript.

O jogo escolhe uma palavra aleatoria, mostra os espacos das letras e permite que o jogador tente descobrir a palavra digitando uma letra por vez.

## Funcionalidades

- Sorteio automatico de uma palavra secreta
- Campo para digitar uma letra
- Verificacao de letras corretas e incorretas
- Contador de tentativas restantes
- Mensagem de vitoria ou derrota
- Suporte para comparar letras com acento usando normalizacao

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do projeto

```text
Jogo da Forca/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Como executar

1. Clone este repositorio:

```bash
git clone URL_DO_REPOSITORIO
```

2. Entre na pasta do projeto:

```bash
cd "Jogo da Forca"
```

3. Abra o arquivo `index.html` no navegador.

Tambem e possivel abrir o projeto diretamente pelo VS Code usando a extensao Live Server.

## Como jogar

1. Uma palavra secreta sera sorteada automaticamente.
2. Digite uma letra no campo de texto.
3. Clique no botao **Tentar**.
4. Se a letra existir na palavra, ela aparecera na posicao correta.
5. Se errar, o numero de tentativas diminuira.
6. O jogo termina quando voce descobrir a palavra ou quando acabarem as tentativas.

## Objetivo do projeto

Este projeto foi criado para praticar conceitos basicos de desenvolvimento web, como manipulacao do DOM, eventos, arrays, condicionais e funcoes em JavaScript.
