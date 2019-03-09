export enum Suit {
  Diamonds = 'Diamonds',
  Spades = 'Spades',
  Hearts = 'Hearts',
  Clubs = 'Clubs'
}

export interface iCard {
  suit: Suit;
  rank: Rank;
}

export enum Rank {
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
  Ace
}

export default class Card {
  suit: Suit;
  rank: Rank;

  constructor(card: iCard) {
    this.suit = card.suit;
    this.rank = card.rank;
  }
}
