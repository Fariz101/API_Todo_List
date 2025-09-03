
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todos } from './todos.interface';

@Injectable()
export class TodosService {
  private todos: Todos[] = [];
  private id = 1;

  findAll(): Todos[] {
    return this.todos;
  }

  findById(id: number): Todos {
    const todo = this.todos.find(todo => todo.id === id);
  if (!todo) {
    throw new NotFoundException(`Todo with ID ${id} not found`);
  }
  return todo;
}

  create(title: string, status: 'pending' | 'done'): Todos {
    const newTodo: Todos = {
      id: this.id++,
      title,
      status
    };
    this.todos.push(newTodo);
    return newTodo;
  }

    update(id: number, title: string, status: 'pending' | 'done'): Todos {
    const todos = this.findById(id);
    todos.title = title
    todos.status = status
    return todos;
  }

  delete(id: number): boolean {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) return false;
    this.todos.splice(index, 1);
    return true;
  }
}
