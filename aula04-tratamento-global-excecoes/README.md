# Aula 04 — Tratamento Global de Exceções

Projeto em Node.js + Express desenvolvido para praticar o tratamento global de erros em aplicações web.

##  Objetivo

Demonstrar como identificar e tratar diferentes tipos de erros, evitando que o servidor seja encerrado inesperadamente.

## Funcionalidades

* Tratamento de `uncaughtException`.
* Tratamento de `unhandledRejection`.
* Tratamento de erros síncronos.
* Tratamento de erros assíncronos.
* Middleware global para captura e resposta dos erros.
* Retorno de respostas em formato JSON.

## Como executar

```bash
npm install
node server.js
```

O servidor será iniciado na porta 3000.

##  Rotas para teste

| Rota               | Função                            |
| ------------------ | --------------------------------- |
| `/sucesso`         | Retorna uma operação bem-sucedida |
| `/erro-sincrono`   | Simula um erro síncrono           |
| `/erro-assincrono` | Simula um erro assíncrono         |

Exemplo:

  text
http://localhost:3000/sucesso
http://localhost:3000/erro-sincrono
http://localhost:3000/erro-assincrono

##  Tecnologias

 Node.js
 Express
 JavaScript
 Tratamento de exceções e Promises
