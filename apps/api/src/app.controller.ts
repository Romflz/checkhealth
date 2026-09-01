import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { GetHealth } from '@checkhealth/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth(): GetHealth {
    return this.appService.getHealth();
  }
}
