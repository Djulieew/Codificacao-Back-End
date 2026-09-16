import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Servidor nest.js - Aula 07 Ativo!';
  }
}
