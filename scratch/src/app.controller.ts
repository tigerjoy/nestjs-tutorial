import { Controller, Get } from '@nestjs/common';

// @Controller() is a decorator
// This specifies to Nest that we will be using this
// class as a controller
// We will be using the decorators quite heavily
@Controller('/app')
class AppController {
  // Each method inside a controller handles
  // one route inside the application

  // To handle GET request to the root route
  // @Get('/')

  @Get('/asdf')
  getRootRoute() {
    return 'Hi there';
  }

  @Get('/bye')
  getByeThere() {
    return 'Bye there';
  }
}

export { AppController };
