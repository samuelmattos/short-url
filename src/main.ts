import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as env from 'dotenv';
env.config();

async function bootstrap() { 
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
