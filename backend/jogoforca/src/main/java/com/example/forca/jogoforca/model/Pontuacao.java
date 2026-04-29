package com.example.forca.jogoforca.model;

public class Pontuacao {
    private String nome;
    private int pontos;

    public Pontuacao(String nome, int pontos) {
        this.nome = nome;
        this.pontos = pontos;
    }

    public String getNome() {
        return this.nome;
    }

    public int getPontos() {
        return this.pontos;
    }
}
