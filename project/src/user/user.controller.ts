import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Req,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}
  @Get()
  findAll(@Req() request: Request) {
    return this.UserService.findAll();
  }

  @Get('filter')
  find(@Query('age') age: number, @Query('breed') breed: string) {
    return `This action returns all user filtered by age: ${age} and breed: ${breed}`;
  }

  @Get(':name')
  findOne(@Param('name') name: string): string {
    return `This action return ${name} user`;
  }

  @Post()
  create(): string {
    return 'This action adds a new user';
  }

  @Put(':id')
  update(@Param('id') id: string): string {
    return `This action update user id ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `This action will delete user id ${id}`;
  }
}
