import { Controller, Post, Get, Body, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() body: createUserDto) {
    return this.usersService.create(body.username, body.password);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
