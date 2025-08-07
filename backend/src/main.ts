import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 👇 Enable CORS so frontend (localhost:3000) can talk to backend (localhost:3001)
  app.enableCors();

  await app.listen(3001); // Make sure this is the correct port you're using
}
bootstrap();
