# 💻 Codificação Back-End

Repositório destinado ao armazenamento de atividades, exercícios e projetos desenvolvidos durante as aulas de Codificação Back-End, com foco no desenvolvimento de aplicações utilizando Node.js, JavaScript, TypeScript e frameworks do ecossistema Back-End.

## 📚 Conteúdos das Aulas

### 📁 Aula 01 — Revisão do Node.js e NPM

**Descrição:** Revisão dos fundamentos do Node.js e NPM, com foco na execução Server-Side e configuração do ambiente de desenvolvimento.

**Conteúdos abordados:**
- Fundamentos do Node.js e NPM.
- Conceito de execução Server-Side.
- Verificação e configuração do ambiente.
- Inicialização de projetos com NPM.
- Criação de scripts de diagnóstico do sistema.
- Importação de módulos nativos.
- Utilização do módulo OS.

**Principais métodos utilizados:**
- `os.platform()`: identifica a plataforma do sistema operacional.
- `os.totalmem()`: retorna a memória RAM total.
- `os.freemem()`: retorna a memória RAM disponível.
- `os.cpus()`: fornece informações sobre os processadores.

**Comandos utilizados:**
```bash
node -v
npm -v
npm init
node diagnostico.js
```

**Tecnologias:** Node.js, NPM e JavaScript.

---

### 📁 Aula 02 — Módulos CommonJS e ES Modules

**Descrição:** Estudo dos sistemas de módulos do Node.js, com foco na organização de arquivos, reutilização de funcionalidades e separação de responsabilidades.

**Conteúdos abordados:**
- Conceito de módulos no Node.js.
- CommonJS e ES Modules (ESM).
- Importação com `require()` e `import`.
- Exportação com `module.exports` e `export`.
- Organização e reutilização de código.
- Separação de responsabilidades.
- Utilização do package.json.
- Criação e utilização de arquivos auxiliares.
- Registro de informações em arquivos de log.

**Tecnologias:** Node.js, JavaScript e NPM.

---

### 📁 Aula 03 — Streams e Buffers

**Descrição:** Desenvolvimento de um projeto em Node.js para processamento de arquivos utilizando Streams e Buffers, permitindo manipular grandes volumes de dados de maneira eficiente.

**Funcionalidades:**
- Geração de arquivos de log.
- Leitura de arquivos utilizando `createReadStream`.
- Filtragem de linhas que contêm a palavra `ERROR`.
- Gravação dos erros encontrados em outro arquivo.
- Monitoramento do consumo de memória.
- Contagem total de erros identificados.
- Utilização do módulo Readline para processamento de linhas.

**Arquivos principais:**
- `gerarLogGigante.js`
- `processaLogs.js`
- `servidor.log`
- `apenas_erros.log`

**Como executar:**
```bash
npm install
node gerarLogGigante.js
node processaLogs.js
```

**Tecnologias:** Node.js, Streams, Buffers, Readline e File System (FS).

---

### 📁 Aula 04 — Tratamento Global de Exceções

**Descrição:** Desenvolvimento de uma aplicação utilizando Node.js e Express para praticar o tratamento global de erros, evitando encerramentos inesperados do servidor.

**Funcionalidades:**
- Tratamento de `uncaughtException`.
- Tratamento de `unhandledRejection`.
- Tratamento de erros síncronos.
- Tratamento de erros assíncronos.
- Implementação de middleware global para captura de erros.
- Retorno de respostas no formato JSON.

**Rotas disponíveis para teste:**

| Rota | Funcionalidade |
|---|---|
| `/sucesso` | Retorna uma operação bem-sucedida. |
| `/erro-sincrono` | Simula um erro síncrono. |
| `/erro-assincrono` | Simula um erro assíncrono. |

**Como executar:**
```bash
npm install
node server.js
```

Servidor iniciado na porta 3000.

**Tecnologias:** Node.js, Express, JavaScript, Promises e tratamento de exceções.

---

### 📁 Aula 05 — Variáveis de Ambiente e Configuração com Node.js

**Descrição:** Estudo da utilização de variáveis de ambiente para armazenar configurações fora do código-fonte, proporcionando maior organização e segurança às aplicações.

**Conteúdos abordados:**
- Conceito de variáveis de ambiente.
- Utilização do arquivo `.env`.
- Diferenças entre `.env` e `.env.example`.
- Acesso às configurações por meio de `process.env`.
- Proteção de informações sensíveis.
- Configuração do arquivo `.gitignore`.
- Separação das configurações do código da aplicação.

**Principais arquivos:**
- `.env`
- `.env.example`
- `.gitignore`
- `app.js`
- `package.json`

**Tecnologias:** Node.js, JavaScript, NPM e dotenv.

---

### 📁 Aula 06 — Servidor Web HTTP com Node.js

**Descrição:** Desenvolvimento de um servidor web utilizando o módulo HTTP nativo do Node.js, sem a utilização de frameworks externos.

**Conteúdos abordados:**
- Funcionamento de servidores HTTP.
- Comunicação entre cliente e servidor.
- Utilização do módulo nativo `http`.
- Criação e configuração de rotas.
- Recebimento de requisições HTTP.
- Envio de respostas ao cliente.
- Utilização de métodos HTTP.
- Definição de códigos de status HTTP.
- Testes de funcionamento pelo navegador.

**Principais arquivo:** `servidor.js`.

**Tecnologias:** Node.js, JavaScript e módulo HTTP.

---

### 📁 Aula 07 — Fundamentos do NestJS

**Descrição:** Introdução ao framework NestJS, baseado em Node.js e TypeScript, para desenvolvimento de aplicações Back-End organizadas, eficientes e escaláveis.

**Conteúdos abordados:**
- Introdução ao framework NestJS.
- Estrutura de um projeto NestJS.
- Configuração inicial da aplicação.
- Integração entre Node.js e TypeScript.
- Instalação e gerenciamento de dependências.
- Organização de aplicações Back-End.
- Execução em ambiente de desenvolvimento.
- Watch mode.
- Execução em produção.
- Testes unitários e testes End-to-End (E2E).

**Comando para instalar as dependências:**
```bash
npm install
```

**Tecnologias:** Node.js, TypeScript, NestJS e NPM.

---

## 🛠️ Tecnologias e Ferramentas

As principais tecnologias e ferramentas utilizadas durante as atividades são:

| Categoria | Tecnologias |
|---|---|
| Linguagens | JavaScript e TypeScript |
| Runtime | Node.js |
| Frameworks | Express e NestJS |
| Gerenciador de pacotes | NPM |
| Validação e configuração | dotenv |
| Módulos nativos | OS, HTTP, FS e Readline |
| Controle de versão | Git |
| Hospedagem de código | GitHub |
| Editor de código | Visual Studio Code |

## 🎯 Objetivo do Repositório

Consolidar os conhecimentos adquiridos durante as aulas de Codificação Back-End por meio de atividades práticas e projetos, desenvolvendo habilidades relacionadas à programação com Node.js, criação de servidores, desenvolvimento de APIs, organização de código, processamento de arquivos, gerenciamento de dependências e tratamento de erros.

## 👩‍💻 Autoria

**Djulie Fontenele**

Repositório desenvolvido para fins educacionais, com atualização contínua conforme o andamento das aulas e o desenvolvimento de novos projetos.

