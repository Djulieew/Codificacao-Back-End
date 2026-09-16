import dotenv from 'dotenv'

dotenv.config();

function iniciarAplicacao(){

    const port = process.env.PORT || 8080;
    const apiKey = process.env.API_KEY_PAGAMENTO;
    const dbUrl = process.env.DATABASE_URL;

    if(!apiKey){
        console.error('ERRO CRÍTICO: a chave API_KEY_PAGAMENTO não está definida nas variáveis de ambiente!');
       process.exit(l); 
    }

    console.log('=== SERVIÇO DE CONFIGURACAÇÃO CARREGADO ===');
    console.log(`Servidor rodando na porta: ${port}`);
    console.log(`Conexão Banco de dados: ${dbUrl}`);
    console.log(`Status da API de Pagamentos: chave de tamanho ${apiKey.length} autenticado`);
}

iniciarAplicacao();