import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // We can either add the pipe to
  // one single route handler or add it globally across
  // all the routes.

  // The ValidationPipe will validate all the incoming
  // requests, that come to our application.

  // This doesn't mean we don't have to specify validation
  // rules. We will still need to add validation rules to
  // each route handler.

  // If the validation rules are not specified, then
  // ValidationPipe would not run on it.

  // We will only validate cetain routes.
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
