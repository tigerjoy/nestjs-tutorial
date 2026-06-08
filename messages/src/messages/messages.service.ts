import { MessagesRepository } from './messages.repository';

// This service is initializing its own dependencies.
// MessagesRepository is a dependency of this service.
// Service cannot work correctly, unless it has the repository.
class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies.
    // This is something that we DO NOT DO in NestJS.
    // DONT DO THIS ON REAL APPS

    // No classes will be creating instances of its dependcies
    // inside the class. Instead, we will be using a service provided
    // by Nest, referred to as Dependency Injection.

    // We are not doing that yet, but we will be removing this
    // and rely upon the Dependency Injection system.
    this.messagesRepo = new MessagesRepository();
  }

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
