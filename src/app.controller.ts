import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(): string {
    return this.appService.postHello();
  }

  @Patch()
  patchHello(): string {
    return this.appService.patchHello();
  }

  @Put()
  putHello(): string {
    return this.appService.putHello();
  }

  @Delete()
  deleteHello(): string {
    return this.appService.deleteHello();
  }
}
