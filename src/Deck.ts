import { default as Card, Rank, Suit } from './Card';

export default class Deck {
  private cards: Card[] = [];

  /**
   * Create a deck of cards
   */
  constructor() {
    Object.keys(Suit).filter(suit => {
      Object.keys(Rank).filter(rank => {
        if (!isNaN(Number(rank))) {
          this.cards.push(new Card(Suit[suit as keyof typeof Suit], Rank[rank as keyof typeof Rank]));
        }
      });
    });
  }

  /**
   * Returns an array of cards in the deck
   */
  get Cards(): Card[] {
    return this.cards;
  }
  /**
   *
   * @param amount Returns specified number of cards and takes them from the top of the deck
   */
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
