import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';

import dotenv from "dotenv";
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);
  await app.listen(3000);
}
bootstrap();
