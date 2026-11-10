import { Injectable, NestMiddleware } from '@nestjs/common';
import type {Request, Response, NextFunction} from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const rota = req.originalUrl || req.url;
    console.log(`[LOG] Método: ${req.method} | Rota: ${rota}`);

//verifica se a rota acessada é a rota admin
    if(rota.startsWith('secret')){
      const role = req.headers['api-key-secret'];

      if(role !== 'secret'){
        return res.status(403).json({
          statusCode: 403,
          mensagem: 'Acesso Negado',
          log: new Date(),
        });
      }
    }


    next();
  }

  
}