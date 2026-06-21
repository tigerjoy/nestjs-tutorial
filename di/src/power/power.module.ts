import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  // By default, the PowerService cannot be accessed
  // by  any other module
  providers: [PowerService],

  // Through this, we explicitly want to make this
  // class available to the other modules.
  exports: [PowerService],
})
export class PowerModule {}
