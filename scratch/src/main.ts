// Tools that Nest provides to make a controller
// and module

// Get helps us create handlers that respond to
// HTTP method of GET
// import { Controller, Module, Get } from '@nestjs/common';
// In 95% from all import statemetns we write
// we will importing from @nestjs/common.

// Only inside the main.ts we import nestjs/core
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// @Controller() is a decorator
// This specifies to Nest that we will be using this
// class as a controller
// We will be using the decorators quite heavily
// @Controller()
// class AppController {
//   // Each method inside a controller handles
//   // one route inside the application

//   // To handle GET request to the root route
//   @Get('/')
//   getRootRoute() {
//     return 'Hi there';
//   }
// }

// A module wraps a controller

// When Nest sees a controller class defined
// within the module, it will go ahead and
// create instance of all the controller classes
// Then it will take a look at all the decorators
// used inside the controller, and set up route handlers
// for each one of them
// @Module({
//   controllers: [AppController],
// })
// class AppModule {}

// This is the function that runs at the startup of
// the app. It is a common convention to name this
// function bootstrap()
async function bootstrap() {
  // Here we create a new Nest application
  // of our module
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

// This will create an instance of our application
// and tell it to listen for incoming traffic
bootstrap();
