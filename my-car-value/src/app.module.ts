import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';

@Module({
  // Setting up connection to the SQLite DB.
  // This connection will be automatically shared down
  // to all the other modules inside our project
  // ex. UsersModule and ReportsModule
  imports: [
    UsersModule,
    ReportsModule,
    // This makes the DB available to all
    // the modules, which we makle use of inside the
    // respective modules to get the corresponding
    // repository
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'db.sqlite',
      entities: [User, Report],
      synchronize: true,
      enableWAL: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
