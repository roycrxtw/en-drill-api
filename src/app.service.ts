import { Injectable } from '@nestjs/common';
import { IGeneralResponse } from './type/common.type';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  checkHealth(): IGeneralResponse {
    return {
      ok: true,
      msg: 'health check ok',
    };
  }
}
