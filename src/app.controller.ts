import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCardDto } from './card.dto';
import { Card } from './card.interface';

@Controller('cards')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  createCard(@Body() createCardDto: CreateCardDto): Card {
    const response = this.appService.createCard(createCardDto);
    return response;
  }

  @Patch(':id')
  moveCard(
    @Param('id') id: string,
    @Body('status') status: 'to-do' | 'in-progress' | 'done',
  ): Card {
    const response = this.appService.moveCard(id, status);
    return response;
  }

  @Get()
  getCards(): Card[] {
    const response = this.appService.getCards();
    return response;
  }
}