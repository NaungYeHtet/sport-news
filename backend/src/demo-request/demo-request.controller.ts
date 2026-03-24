import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { DemoRequestService } from './demo-request.service';
import { CreateDemoRequestDto } from './dto/create-demo-request.dto';

@Controller('demo-request')
export class DemoRequestController {
  constructor(private readonly demoRequestService: DemoRequestService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Throttle({ default: { ttl: 60000, limit: 3 } })
  async create(@Body() dto: CreateDemoRequestDto) {
    await this.demoRequestService.create(dto);
    return {
      success: true,
      message: 'Demo request submitted successfully',
    };
  }
}
