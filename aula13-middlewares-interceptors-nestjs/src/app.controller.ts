import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getPublic(){
    return {
      mensagem:'Rota Pública Acessada com Sucesso!',
      data: new Date(), 
    }
  }

  @Get('admin')
  getAdmin(){
    return{
  mensagem:'Bem-vindo ao Painel admnistrativo!',
  data: new Date(),
    }
  }

  @Get('secret')
  getSecret(){
    return{
      mensagem:'Bem-vindo a Rota Secreta!',
      data: new Date(),
    }
  }
}