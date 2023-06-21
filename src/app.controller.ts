import { Controller, Inject } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Controller()
export class AppController {
  @Inject(HttpAdapterHost) 
  httpServerRef: HttpAdapterHost
}
