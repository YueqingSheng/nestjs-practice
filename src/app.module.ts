import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './log.service';

const mockAppService = {
  getHello(): string {
    return 'Hello';
  }
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
    provide: AppService,
    useValue: mockAppService,
  },{
    provide: 'LOGGER',
    useClass: LoggerService,
  },{
    provide: 'DEMO_FACTORY',
    useFactory: (logger) =>{
      logger.log('This message came from a provider factory');
      return 'demo factory';
    },
    inject: ['LOGGER']
  }],
})
export class AppModule {}
