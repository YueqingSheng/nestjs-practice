import { Injectable, Inject } from '@nestjs/common';
import { LoggerService } from './log.service';

@Injectable()
export class AppService {
  constructor( private readonly logger: LoggerService){}

  getHello(): string {
    this.logger.log('Hello, world!');
    return 'Hello World!';
  }
}
