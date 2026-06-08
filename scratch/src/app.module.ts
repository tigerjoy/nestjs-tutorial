import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// A module wraps a controller

// When Nest sees a controller class defined
// within the module, it will go ahead and
// create instance of all the controller classes
// Then it will take a look at all the decorators
// used inside the controller, and set up route handlers
// for each one of them
@Module({
  controllers: [AppController],
})
class AppModule {}

export { AppModule };
