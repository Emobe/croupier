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

  set Cards(cards: Card[]) {
    this.cards = cards;
  }
}
