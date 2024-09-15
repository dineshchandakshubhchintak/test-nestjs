import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todos.entity';
import { User } from 'src/users/users.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  async create(title: string, description: string, user: User): Promise<Todo> {
    const todo = this.todosRepository.create({ title, description, user });
    return this.todosRepository.save(todo);
  }

  async findAll(userId: number): Promise<Todo[]> {
    return this.todosRepository.find({ where: { user: { id: userId } } });
  }

  async update(id: number, completed: boolean): Promise<Todo> {
    const todo = await this.todosRepository.findOneBy({ id });
    todo.completed = completed;
    return this.todosRepository.save(todo);
  }

  async delete(id: number): Promise<void> {
    await this.todosRepository.delete(id);
  }
}
