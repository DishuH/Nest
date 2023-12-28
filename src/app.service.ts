import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(): string {
    return 'Hello World but post!';
  }

  patchHello(): string {
    return 'Hello World but patch!';
  }

  putHello(): string {
    return 'Hello World but put!';
  }

  deleteHello(): string {
    return 'Hello World but delete!';
  }
}
