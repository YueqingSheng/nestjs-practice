import { AppService } from './app.service';
import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('static')
  @Render('index')
  root() {
    return { page: 'nihao', title: 'hello' };
  }
}
