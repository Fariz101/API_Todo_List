import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  private readonly users = [];

  findAll(): string[] {
    return this.users;
  }
}
