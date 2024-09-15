import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Todo } from './todos.entity';
import { UsersModule } from '../users/users.module'; // Import UsersModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo]),
    UsersModule, // Import UsersModule to make UsersService available
  ],
  providers: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
