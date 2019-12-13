import { Injectable, Inject } from '@nestjs/common';
import { LoggerService } from './log.service';

@Injectable()
export class AppService {
  constructor(@Inject('LOGGER') private readonly loggerService: LoggerService){}

  getHello(): string {
    this.loggerService.log('Hello, world!');
    return 'Hello World!';
  }
}
