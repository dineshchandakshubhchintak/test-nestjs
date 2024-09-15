import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { UsersService } from 'src/users/users.service';
import { createTodoDto, patchTodoDto } from './dto/todos.dto';

@Controller('todos')
export class TodosController {
  constructor(
    private readonly todosService: TodosService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async create(@Body() body: createTodoDto) {
    const user = await this.usersService.findOne(body.userId);
    return this.todosService.create(body.title, body.description, user);
  }

  @Get(':userId')
  async findAll(@Param('userId') userId: number) {
    return this.todosService.findAll(userId);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: patchTodoDto) {
    return this.todosService.update(id, body.completed);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.todosService.delete(id);
  }
}
