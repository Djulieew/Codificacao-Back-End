# Aula 02 — Módulos CommonJS e ES Modules

Este projeto foi desenvolvido durante a **Aula 02 de Back-End com Node.js**, com o objetivo de estudar a utilização de módulos, organização de arquivos e diferentes formas de importar e exportar funcionalidades no Node.js.

##  Conteúdos estudados

Durante esta aula, foram trabalhados os seguintes conceitos:

 Módulos no Node.js
 CommonJS
 ES Modules (ESM)
 require()
 module.exports
 import
 export
Organização e reutilização de código
 Separação de responsabilidades
 Arquivos auxiliares
 package.json
 Registro de informações em arquivos de log
 Estruturação de um projeto Node.js

##  O que são módulos?

Módulos são uma forma de dividir uma aplicação em diferentes arquivos, permitindo organizar melhor o código e reutilizar funcionalidades.

Em vez de colocar todo o código dentro de um único arquivo, podemos criar arquivos específicos para determinadas funções.

Exemplo:

```text
index.js
utils.js
logs/
└── system.log

Utilizações de funcões :
 node index.js 
