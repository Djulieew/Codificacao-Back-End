//! importando o modulo 'os' do Node.js para obter informacoes sobre servidor
const os = require('os');

//! exibindo informacoes sobre o sistema operacional e hardware do servidor
console.log('=== DIAGNÓSTICO DO SERVIDOR ===\n');


const plataforma = os.platform(); //! obtendo a plataforma do sistema operacional 
const memoriaTotal = (os.totalmem() / (1024 ** 3).toFixed(2)); 
const memoriaLivre = (os.freemem() / (1024 ** 3).toFixed(2));
const cpus = os.cpus(); //! obtendo informacoes sobre os processamentos 

console.log(`Arquitetura OS: ${plataforma}`);
console.log(`Memoria RAM Total: ${memoriaTotal} GB`);
console.log(`Memoria RAM Livre: ${memoriaLivre} GB`);
console.log(`Cores da CPU: ${cpus.length}`);
console.log(`Processador: ${cpus[0].model}`);