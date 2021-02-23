import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { 
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port: number =  parseInt(`${process.env.PORT_APP}`) || 3000;
  await app.listen(port);
}
bootstrap();
