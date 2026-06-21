import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-message.dto';
import { MessagesService } from '../messages.service';

@Controller('messages')
export class MessagesController {
  // Syntax #1
  // messagesService: MessagesService;

  // constructor(messagesService: MessagesService) {
  //   // DO NOT DO THIS IN PRODUCTION
  //   // We will be refactoring this code.
  //   // OLD CODE
  //   // this.messagesService = new MessagesService();

  //   this.messagesService = messagesService;
  // }

  // Syntax #2 - Equivalent to Syntax #1
  constructor(
    public messagesService: MessagesService,
    // public messagesService2: MessagesService,
    // public messagesService3: MessagesService,
  ) {
    // console.log(
    //   `Is messagesService equal to messagesService2?`,
    //   messagesService === messagesService2,
    // );
    // console.log(
    //   `Is messagesService2 equal to messagesService3?`,
    //   messagesService2 === messagesService3,
    // );
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
