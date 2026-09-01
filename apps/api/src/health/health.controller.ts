import type { GetHealth } from '@checkhealth/shared';
import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}
  
  @Get('health')
  getHealth(): GetHealth {
    return this.healthService.getHealth();
  }
}
