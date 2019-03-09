import { default as Card, iCard, Rank, Suit } from './Card';

export type CardList = Set<Card>;

export default class Deck {
  private cards: CardList = new Set<Card>();

  constructor() {
    let rankValue: Rank;
    for (const suit in Suit) {
      for (const rank in Rank) {
        if (!isNaN(Number(rank))) {
          this.cards.add(
            new Card({
              suit: Suit[suit] as Suit,
              rank: Rank[rank as keyof typeof Rank]
            })
          );
        }
      }
    }
  }

  public setFromArray() {}

  get Cards(): CardList {
    return this.cards;
  }

  set Cards(cards: CardList) {
    this.cards = cards;
  }
}
