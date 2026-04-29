package com.example.forca.jogoforca.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.example.forca.jogoforca.model.Pontuacao;

@Service
public class JogoService {
    private List<String> palavras = List.of("CASA", "CARRO", "BOLA", "GATO", "SOL", "MAR", "FLOR", "PÃO", "MESA",
            "CHUVA",
            "FOGO", "VENTO", "LUA", "PEIXE", "TERRA", "JANELA", "ESTRADA", "BICICLETA",
            "ESCRITA", "FELICIDADE", "RELÓGIO", "CACHORRO", "MULHER", "HOMEM", "AMIZADE",
            "ESCOLA", "TRABALHO", "NATUREZA", "ALEGRIA", "SILÊNCIO", "EXCEPCIONAL",
            "QUARTEIRÃO", "HORIZONTE", "PISCINA", "NAUSÉIA", "PSICÓLOGO", "CHURRASQUEIRA",
            "ALMOFADA", "MISTÉRIO", "RAPIDAMENTE", "ELEFANTE", "GIRAFA", "RINOCERONTE",
            "BORBOLETA", "TARTARUGA", "CHOCOLATE", "LARANJA", "MACARRÃO", "HAMBÚRGUER",
            "SANDUÍCHE", "ALEMANHA", "PORTUGAL", "BRASIL", "ARGENTINA", "JAPÃO", "MÉDICO",
            "ENGENHEIRO", "PROFESSOR", "ADVOGADO", "BOMBEIRO");

    private List<Pontuacao> ranking = new ArrayList<>();

    public String getPalavraAleatoria() {
        Random random = new Random();
        return palavras.get(random.nextInt(palavras.size()));
    }

    public void salvarPontuacao(Pontuacao p) {
        ranking.add(p);
        ranking.sort((a, b) -> b.getPontos() - a.getPontos());
    }

    public List<Pontuacao> getRanking() {
        return ranking;
    }
}
