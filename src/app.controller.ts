import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from './log.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly loggerService: LoggerService
    ) {
    }
  
  
  @Get()
  getHello(): string {
    this.loggerService.log('AppService: Hello World!')
    return this.appService.getHello();
  }
}
