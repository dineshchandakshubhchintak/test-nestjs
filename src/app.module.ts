import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'sqlite', // Set the database type to SQLite
    database: 'todo-app.sqlite', // SQLite database file
    autoLoadEntities: true, // Automatically load entities
    synchronize: true, // Use only in development,
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  }),UsersModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
