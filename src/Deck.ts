import { CardImpl } from './Card';
import type { Card, Suit, Rank } from './Card';

export class Deck {
  private cards: Card[];
  private readonly suits: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
  private readonly ranks: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  constructor() {
    this.cards = [];
    this.createDeck();
  }

  private createDeck(): void {
    for (const suit of this.suits) {
      for (const rank of this.ranks) {
        this.cards.push(new CardImpl(suit, rank));
      }
    }
  }

  shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal(): Card | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.cards.pop();
  }

  isEmpty(): boolean {
    return this.cards.length === 0;
  }

  size(): number {
    return this.cards.length;
  }

  reset(): void {
    this.cards = [];
    this.createDeck();
  }

  // Add a method to peek at the top card without removing it
  peek(): Card | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.cards[this.cards.length - 1];
  }

  // Add method to deal multiple cards
  dealCards(count: number): Card[] {
    const dealtCards: Card[] = [];
    for (let i = 0; i < count && !this.isEmpty(); i++) {
      const card = this.deal();
      if (card) {
        dealtCards.push(card);
      }
    }
    return dealtCards;
  }
}