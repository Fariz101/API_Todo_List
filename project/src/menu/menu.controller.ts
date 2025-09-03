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

@Controller('menu')
export class MenuController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all menu';
  }

   @Get('filter')
  find(@Query('name') name: string) {
    return `This action returns all menu filtered by name: ${name}`;
  }


  @Get(':name')
  findOne(@Param('name') name: string): string {
    return `This action return ${name} menu`;
  }

 
  @Post()
  create(): string {
    return 'This action adds a new menu';
  }

  @Put(':id')
  update(@Param('id') id: string): string {
    return `This action update menu id ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `This action will delete menu id ${id}`;
  }
}
