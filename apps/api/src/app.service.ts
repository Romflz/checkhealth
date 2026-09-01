import { Injectable } from '@nestjs/common';

export interface GetHealth {
  msg: 'ok' | 'degraded'
}
@Injectable()
export class AppService {
  getHealth(): GetHealth {
    return {
      msg: 'ok',
    };
  }
}
