import { default as Card, Rank, Suit } from './Card';

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
    Object.values(Suit).forEach(suit => {
      Object.values(Rank).filter(value => typeof value === 'number').forEach(rank => {
        this.cards.push(new Card(suit as Suit, rank as Rank));
      });
    });

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
