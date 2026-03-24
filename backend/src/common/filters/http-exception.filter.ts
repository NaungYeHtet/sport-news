import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

interface ExceptionResponseObject {
  message?: unknown;
  [key: string]: unknown;
}

function isExceptionResponseObject(
  value: unknown,
): value is ExceptionResponseObject {
  return typeof value === 'object' && value !== null;
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let errors: Record<string, string[]> | undefined;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exResponse = exception.getResponse();
      const { message: exceptionMessage } = exception;

      if (isExceptionResponseObject(exResponse)) {
        const { message: resMessage } = exResponse;

        if (Array.isArray(resMessage)) {
          message = 'Validation failed';
          errors = {
            validation: resMessage.filter(
              (m): m is string => typeof m === 'string',
            ),
          };
        } else if (typeof resMessage === 'string') {
          message = resMessage;
        } else {
          message = exceptionMessage;
        }
      } else if (typeof exResponse === 'string') {
        message = exResponse;
      }
    }

    response.status(status).json({
      success: false,
      message,
      ...(errors && { errors }),
    });
  }
}
