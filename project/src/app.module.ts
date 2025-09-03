import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MenuController } from './menu/menu.controller';
import { MenuService } from './menu/menu.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, MenuController, TodosController],
  providers: [AppService, UserService, MenuService, TodosService],
})
export class AppModule {}
