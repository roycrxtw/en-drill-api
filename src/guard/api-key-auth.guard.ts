import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ApiKeyAuthGuard implements CanActivate {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiKey = this.extractApiKeyFromHeader(request);
    if (!apiKey) {
      throw new UnauthorizedException();
    }

    if (apiKey === process.env.API_KEY) {
      return true;
    } else {
      throw new UnauthorizedException();
    }
  }

  private extractApiKeyFromHeader(request: Request) {
    return request.headers['x-api-key'] || '';
  }
}
