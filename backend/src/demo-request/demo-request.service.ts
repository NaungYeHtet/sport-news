import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDemoRequestDto } from './dto/create-demo-request.dto';

@Injectable()
export class DemoRequestService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateDemoRequestDto) {
    const { fullName, email, country, message } = dto;
    const sanitized = {
      fullName: this.stripHtml(fullName),
      email,
      country: this.stripHtml(country),
      message: message ? this.stripHtml(message) : undefined,
    };

    return this.prisma.demoRequest.create({ data: sanitized });
  }

  private stripHtml(input: string): string {
    return input.replace(/<[^>]*>/g, '');
  }
}
