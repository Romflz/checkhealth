import { GetHealth } from '@checkhealth/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth(): GetHealth {
    return {
      msg: 'ok',
    };
  }
}
