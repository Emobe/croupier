import { default as Card, type Rank, type Suit, ranks, suits } from './Card';

interface DeckOptions {
  seed?: number;
  shuffle?: boolean;
  jokers?: boolean;
}

export default class Deck {
  private cards: Card[] = [];

  /**
   * Create a deck of cards
   */
  constructor(options: DeckOptions = {}) {
    // TODO add jokers
    const { seed = Math.random(), shuffle = true } = options;
    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(new Card(suit, rank));
      }
    }

    if (shuffle) {
      this.shuffle(seed);
    }
  }

  get Cards(): Card[] {
    return this.cards;
  }

  get Count(): number {
    return this.cards.length;
  }

  public take(amount: number): Card[] {
    if (amount > this.cards.length) {
      throw new Error('Cannot take more cards than what is available');
    }
    return this.cards.splice(-Math.abs(amount), amount);
  }

  public shuffle(seed = Math.random()): void {
    let currentIndex = this.cards.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(seed * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }
}
