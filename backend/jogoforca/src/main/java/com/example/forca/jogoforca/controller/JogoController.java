package com.example.forca.jogoforca.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.forca.jogoforca.model.Pontuacao;
import com.example.forca.jogoforca.service.JogoService;

@RestController
@RequestMapping("/api/jogo")
@CrossOrigin
public class JogoController {
    private final JogoService service;

    public JogoController(JogoService service) {
        this.service = service;
    }

    @GetMapping("/palavra")
    public String getPalavra() {
        return service.getPalavraAleatoria();
    }

    @PostMapping("/pontuacao")
    public void salvar(@RequestBody Pontuacao p) {
        service.salvarPontuacao(p);
    }

    @GetMapping("/ranking")
    public List<Pontuacao> ranking() {
        return service.getRanking();
    }
}
