export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

export interface Card {
  readonly suit: Suit;
  readonly rank: Rank;
  readonly value: number;
  toString(): string;
  equals(other: Card): boolean;
  isSameSuit(other: Card): boolean;
  isSameRank(other: Card): boolean;
}

export class CardImpl implements Card {
  readonly suit: Suit;
  readonly rank: Rank;
  readonly value: number;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
    this.value = this.getCardValue();
  }

  private getCardValue(): number {
    switch (this.rank) {
      case 'A': return 14;
      case 'K': return 13;
      case 'Q': return 12;
      case 'J': return 11;
      case '10': return 10;
      case '9': return 9;
      case '8': return 8;
      case '7': return 7;
      case '6': return 6;
      case '5': return 5;
      case '4': return 4;
      case '3': return 3;
      case '2': return 2;
      default: return 0;
    }
  }

  toString(): string {
    return `${this.rank} of ${this.suit}`;
  }

  equals(other: Card): boolean {
    return this.suit === other.suit && this.rank === other.rank;
  }

  isSameSuit(other: Card): boolean {
    return this.suit === other.suit;
  }

  isSameRank(other: Card): boolean {
    return this.rank === other.rank;
  }
}