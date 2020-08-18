---
id: openldr-api
title: Open LDR API
---

## WEB API

O OpenLDR possui diversos de mecanismos de comunicação com outros Sistemas de Informação, e para o consumo de dados e relatórios foi criada uma web API baseada na arquitetura REST. Esta é uma API estática que concentra as principais responsabilidades dos dados no Backend.

Toda solicitação é feita a partir de rotas `http` disponibilizadas pelo Backend, sendo que cada rota é criada para responder apenas a uma solicitação específica.

## Schema

Todo o acesso a API é feito através do protocolo HTTP.

- O acesso pode ser feito através de qualquer linguagem com suporte a comunicação REST.
- Toda a comunicação é feita no formato JSON.
- Todos os dados são enviados e recebidos no formato JSON.
- O output de campos vazios é representado por `null`.
- As datas são apresentadas no formato ISO 8601 `YYYY-MM-DDTHH:MM:SSZ`.

## Autenticação

A autenticação é feita por meio de um token assinado utilizando o padrão **JWT** (Json Web Tokens). Este token é um código em `Base64` que armazena objectos `JSON` com os dados que permitem a autenticação da requisição.

_A descrição do processo de autenticação contendo os links de acesso e a criação das credênciais pode ser obtida entrando em contacto com a equipa que mantém o projecto. Por questões de segurança esta sessão não é descrita neste documento._
