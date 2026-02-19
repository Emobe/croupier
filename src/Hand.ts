import type { Card } from './Card';

export class Hand {
  private cards: Card[];

  constructor() {
    this.cards = [];
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  removeCard(card: Card): boolean {
    const index = this.cards.findIndex(c => c.equals(card));
    if (index !== -1) {
      this.cards.splice(index, 1);
      return true;
    }
    return false;
  }

  removeCardAt(index: number): Card | undefined {
    if (index < 0 || index >= this.cards.length) {
      return undefined;
    }
    return this.cards.splice(index, 1)[0];
  }

  isEmpty(): boolean {
    return this.cards.length === 0;
  }

  size(): number {
    return this.cards.length;
  }

  getCards(): Card[] {
    return [...this.cards];
  }

  clear(): void {
    this.cards = [];
  }

  sort(): void {
    this.cards.sort((a, b) => b.value - a.value);
  }

  getCardsBySuit(suit: string): Card[] {
    return this.cards.filter(card => card.suit === suit);
  }

  getCardsByRank(rank: string): Card[] {
    return this.cards.filter(card => card.rank === rank);
  }

  containsCard(card: Card): boolean {
    return this.cards.some(c => c.equals(card));
  }

  getCardAt(index: number): Card | undefined {
    if (index < 0 || index >= this.cards.length) {
      return undefined;
    }
    return this.cards[index];
  }
}