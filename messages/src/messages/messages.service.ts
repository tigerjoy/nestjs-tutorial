import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

// This service is initializing its own dependencies.
// MessagesRepository is a dependency of this service.
// Service cannot work correctly, unless it has the repository.

// @Injectable() marks this class for registration, and with
// this the registration in the DI container happens
// automatically.
@Injectable()
class MessagesService {
  // Syntax #1
  // messagesRepo: MessagesRepository;

  // constructor(messagesRepo: MessagesRepository) {
  //   // OLD ASSIGNMENT
  //   // this.messagesRepo = new MessagesRepository();

  //   this.messagesRepo = messagesRepo;
  // }

  // Syntax #2 - Equivalent to #1
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}

export { MessagesService };
