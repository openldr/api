---
id: openldr
title: Open LDR Data
---

Open Lab Data Repository (Repositorio de Dados Laboratoriais)(https://openldr.org).

## Porquê OpenLDR?

O **Open Laboratory Data Repository** (OpenLDR) é um conjunto de Base de Dados para o armazenamento e gestão de dados laboratoriais. Um dos principais objetivos de projeto é acomodar dados de diferentes Sistemas de Gestão de Informação Laboratorial em uma estrutura padronizada e centralizada. O OpenLDR possui um modelo de dados simples e fácil de entender, a fim de simplificar a mesclagem de dados, análise de dados e criação de modelos de relatórios.

O Open LDR possui um design “aberto” para facilitar a comunicação com qualquer Sistemas de Informação Laboratorial, porém seus dados são geridos e hospedados de forma privada e segura pelo Ministério da Saúde.

Para mais informações, [nesta página](https://openldr.org/ "Open LDR Data") encontra-se detalhada a documentação do projecto.

## Como são agregados os dados?

O design do Open LDR permite fluxo de dados para a Base de dados usando diferentes métodos por forma a facilitar a captura dos dados de diferentes fontes ou tecnologias.

- Inserções SQL directamente nas Base de Dados a partir do Sistemas de Informação Laboratorial
- Importação de ficheiros/datasets padronizados
- Importações customizadas
- API Web

O desenvolvedor do SIL pode inserir os dados directamente no repositório desde que siga as regras de inserção definidas.

## Como são extraídos os dados?

O Open LDR possui uma API web para o consumo de dados por parte de outros Sistemas de Informação de Saúde, que consiste em uma interface para a extração de dados e relatórios.
