import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateDemoRequestDto {
  @IsString()
  @IsNotEmpty({ message: 'Full name is required' })
  @MaxLength(100)
  @Transform(({ value }: { value: string }) => value?.trim())
  fullName: string;

  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  @MaxLength(255)
  @Transform(({ value }: { value: string }) => value?.trim().toLowerCase())
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Country is required' })
  @MaxLength(100)
  @Transform(({ value }: { value: string }) => value?.trim())
  country: string;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  @Transform(({ value }: { value: string }) => value?.trim())
  message?: string;
}
