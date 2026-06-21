import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  // Things that can be used as deoendendies for other classes
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
