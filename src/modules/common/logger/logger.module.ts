import { Module, DynamicModule } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Module({})
export class LoggerModule {
    static register(prefix: string): DynamicModule{
        return {
            module: LoggerModule,
            providers: [LoggerService, 
                {
                provide: `PREFIX`,
                useValue: prefix
                }],   
            exports: [LoggerService],
        }
    }
}
