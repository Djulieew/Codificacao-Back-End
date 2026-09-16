# Aula 05 — Variáveis de Ambiente e Configuração com Node.js

##  Sobre a aula

Nesta aula, foram estudados os conceitos de **variáveis de ambiente** e **configuração de aplicações Node.js**.

O objetivo é aprender como armazenar informações de configuração fora do código-fonte, evitando deixar dados importantes diretamente no código da aplicação.

Também foi abordada a utilização do arquivo `.env`, do arquivo `.env.example` e a importância de configurar o `.gitignore` para evitar o envio de informações sensíveis para o GitHub.


##  Objetivos

- Compreender o conceito de variáveis de ambiente.
- Utilizar arquivos `.env` para armazenar configurações.
- Entender a diferença entre `.env` e `.env.example`.
- Acessar variáveis de ambiente em uma aplicação Node.js.
- Utilizar o `process.env`.
- Proteger informações sensíveis.
- Configurar o `.gitignore`.
- Separar configurações do código da aplicação.



##  Estrutura do projeto

```text
aula05-variaveis-ambientes-config/
│
├── node_modules/
│
├── .env
├── .env.example
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md