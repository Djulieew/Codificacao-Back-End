
# Aula 01 — Revisão do Node.js e NPM

> Revisão dos fundamentos do **Node.js e NPM**, com foco em execução **Server-Side**.

##  Objetivo

Nesta aula foram revisados conceitos básicos do Node.js e NPM.
Foi realizada a configuração e verificação do ambiente de desenvolvimento.
Também foi criado um projeto utilizando o NPM.
Durante a atividade, foi desenvolvido um script de diagnóstico do sistema.

## Conteúdos Abordados

* Revisão do Node.js e NPM;
* Conceito de execução Server-Side;
* Verificação do ambiente;
* Inicialização de projeto Node.js;
* Criação de script de diagnóstico;
* Importação de módulos nativos;
* Utilização do módulo `OS`.

##  Node.js

O Node.js permite executar JavaScript fora do navegador.
Nesta aula, foi aplicado o conceito de JavaScript no ambiente Server-Side.

##  NPM

O NPM é o gerenciador de pacotes utilizado pelo Node.js.
A versão do Node.js pode ser verificada com `node -v`.
A versão do NPM pode ser verificada com `npm -v`.

##  Inicialização

O projeto foi inicializado utilizando o comando:
`npm init`
Também pode ser utilizado `npm init -y`.
Esse processo cria o arquivo `package.json`.

##  Script de Diagnóstico

Foi criado um script para realizar um diagnóstico básico do sistema.
O script utiliza recursos nativos do Node.js.
Sua execução pode ser realizada com `node diagnostico.js`.

##  Módulo OS

Foi utilizado o módulo nativo `OS` do Node.js.
Sua importação foi realizada utilizando:
`const os = require('os');`

##  Métodos Utilizados

### `os.platform()`

Retorna a plataforma do sistema operacional.

### `os.totalmem()`

Retorna a quantidade total de memória RAM em bytes.

### `os.freemem()`

Retorna a quantidade de memória RAM livre em bytes.

### `os.cpus()`

Retorna informações sobre os processadores disponíveis.

## 🧪 Exemplo

```javascript
const os = require('os');
console.log('Sistema:', os.platform());
console.log('Memória total:', os.totalmem());
console.log('Memória livre:', os.freemem());
console.log('CPUs:', os.cpus().length);
```

## 📂 Estrutura

```text
aula-01-node-npm/
├── diagnostico.js
├── package.json
└── README.md
```

##  Execução

```bash
node diagnostico.js
```

## Aprendizado
A aula permitiu revisar Node.js, NPM e execução Server-Side.
Também foi possível utilizar módulos nativos para obter informações do sistema.

##  Autor

**Adrieli Martins**

Projeto desenvolvido para fins educacionais.

### comandos utilizados:
node -v
npm -v
