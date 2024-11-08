import { Injectable } from '@nestjs/common';
import { Card } from './card.interface';
import { CreateCardDto } from './card.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  private cards: Card[] = [];

  createCard(createCardDto: CreateCardDto): Card {
    const newCard: Card = {
      id: uuidv4(),
      title: createCardDto.title,
      description: createCardDto.description,
      status: 'to-do',
    };
    this.cards.push(newCard);
    console.log(this.cards)
    return newCard;
  }

  moveCard(id: string, status: 'to-do' | 'in-progress' | 'done'): Card {
    const card = this.cards.find(card => card.id === id);
    if (!card) {
      throw new Error('Card not found');
    }
    card.status = status;
    return card;
  }

  getCards(): Card[] {
    return this.cards;
  }
}
