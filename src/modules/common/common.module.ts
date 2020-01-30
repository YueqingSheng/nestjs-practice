import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/logger.module';

@Module({

  imports: [LoggerModule.register('🤣 ')],
  exports: [LoggerModule],
})
export class CommonModule {}
