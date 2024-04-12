# Agendamento de Fretes - Proposta de Atividade

Este é um projeto desenvolvido como atividade prática da disciplina de Programação Web 1, ministrada pelo docente Leonardo Rocha, no curso de [Nome do Curso] da [Nome da Instituição]. O objetivo do projeto é criar um sistema simples para agendar fretes para uma empresa de transporte.

### Funcionalidades
* Escolha de cor e data para agendar um frete.
## Restrições:
* Cada veículo só pode fazer um frete por dia.
* Cada veículo só pode fazer até 3 fretes por mês.
* O usuário não pode selecionar uma data menor que 1 ou maior que 31.
* Interface amigável e responsiva.
## Código 1: Funcionalidade de Agendamento
 
Este código permite ao usuário selecionar uma cor e uma data para agendar um frete. Ele inclui validações para garantir que cada veículo possa realizar apenas um frete por dia e até três fretes por mês.

## Arquivos Incluídos:
- `calendar.css:` Arquivo CSS para estilizar a página.
- `calendar.js:` Script JavaScript para adicionar funcionalidades de agendamento.

### Funcionalidades:
- **HTML:**

- Define campos para seleção de cor e data.
- Inclui um calendário para visualização e seleção de datas.
- Exibe informações sobre as restrições de agendamento.

**CSS:**

- Estiliza a página, os campos de seleção e o calendário.
- Define cores, margens e bordas para garantir uma aparência atraente.

**JavaScript:**

- colorirDia(): Função para atualizar a cor de fundo da célula do calendário com a cor selecionada.
- alternar(el): Função para alternar a visibilidade das imagens dos veículos ao clicar no botão "Ver Veículos".
- Código 2: Validação de Data
- Este código adiciona uma validação extra para garantir que o usuário não selecione uma data menor que 1 ou maior que 31.

## Funcionalidades:
**JavaScript:**

- Adiciona uma validação para verificar se a data selecionada está dentro do intervalo válido (1-31).
- Exibe uma mensagem de erro caso a data seja inválida.
- Código 3: Melhoria de Estilo
- Este código aprimora a estilização da página, deixando-a mais atraente e responsiva.

## Funcionalidades:
**CSS:**
- Refina a estilização da página, tornando-a mais centralizada e arredondada.
- Melhora o estilo do botão "Enviar", tornando-o mais atrativo e com feedback visual ao passar o mouse.

## Tecnologias Utilizadas
* Este projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

- HTML (HyperText Markup Language): Utilizado para estruturar a página web, definindo seus elementos e layout.
- CSS (Cascading Style Sheets): Utilizado para estilizar a página web, aplicando cores, fontes, e layouts.
- JavaScript: Utilizado para adicionar interatividade à página web, permitindo validações e manipulações dinâmicas.
- GitHub: Plataforma de hospedagem de código-fonte e colaboração, utilizada para armazenar e versionar o código do projeto.

## Autor
- Este projeto foi desenvolvido por Samuel Lima do Amaral.

