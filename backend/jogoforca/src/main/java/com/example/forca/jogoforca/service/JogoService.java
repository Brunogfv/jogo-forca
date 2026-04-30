package com.example.forca.jogoforca.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.example.forca.jogoforca.model.Pontuacao;
import com.example.forca.jogoforca.repository.PontuacaoRepository;

@Service
public class JogoService {

    private final PontuacaoRepository repository;

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

    public JogoService(PontuacaoRepository repository) {
        this.repository = repository;
    }

    public String getPalavraAleatoria() {
        Random random = new Random();
        return palavras.get(random.nextInt(palavras.size()));
    }

    public void salvarPontuacao(Pontuacao p) {
        repository.save(p);
    }

    public List<Pontuacao> getRanking() {
        return repository.findAllByOrderByPontosDesc();
    }
}
