package com.example.forca.jogoforca.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.forca.jogoforca.model.Pontuacao;

public interface PontuacaoRepository extends JpaRepository<Pontuacao, Long> {

    List<Pontuacao> findAllByOrderByPontosDesc();

}
