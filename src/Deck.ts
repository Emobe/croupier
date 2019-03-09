import { default as Card, Rank, Suit } from './Card';

export type CardList = Set<Card>;

export default class Deck {
  private cards: CardList = new Set<Card>();

  constructor() {
    Object.keys(Suit).filter(suit => {
      Object.keys(Rank).filter(rank => {
        if (!isNaN(Number(rank))) {
          this.cards.add(
            new Card(
              Suit[suit as keyof typeof Suit],
              Rank[rank as keyof typeof Rank]
            )
          );
        }
      });
    });
  }

  get Cards(): CardList {
    return this.cards;
  }

  set Cards(cards: CardList) {
    this.cards = cards;
  }
}
