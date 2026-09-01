import { Injectable } from '@nestjs/common';
import type { GetHealth } from '@checkhealth/shared';

@Injectable()
export class AppService {
  getHealth(): GetHealth {
    return {
      msg: 'ok',
    };
  }
}
