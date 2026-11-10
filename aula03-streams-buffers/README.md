# Aula 03 — Streams e Buffers

Projeto em Node.jspara processamento de arquivos utilizando Streams e Buffers.

### Funcionalidades

* Leitura do arquivo `servidor.log` com `createReadStream`.
* Filtragem de linhas que contêm `ERROR`.
* Gravação dos erros em `apenas_erros.log`.
* Monitoramento do consumo de memória.
* Contagem total de erros encontrados.

### Como executar

```bash
npm install
node gerarLogGigante.js
node processaLogs.js
```

### Estrutura

```text
aula03-streams-buffers/
├── gerarLogGigante.js
├── processaLogs.js
├── servidor.log
├── apenas_erros.log
├── package.json
└── README.md
```

Tecnologias: Node.js, Streams, Readline e File System (FS).

e criação de arquivos.
