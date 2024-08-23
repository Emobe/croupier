//export enum Suit {
//  Diamonds = 'Diamonds',
//  Spades = 'Spades',
//  Hearts = 'Hearts',
//  Clubs = 'Clubs',
//}
//
//export enum Rank {
//  Two = 2,
//  Three = 3,
//  Four = 4,
//  Five = 5,
//  Six = 6,
//  Seven = 7,
//  Eight = 8,
//  Nine = 9,
//  Ten = 10,
//  Jack = 11,
//  Queen = 12,
//  King = 13,
//  Ace = 14,
//}

export const suits = ['diamonds', 'spades', 'hearts', 'clubs'] as const;

export type Suit = (typeof suits)[number];

export const ranks = [
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'jack',
  'queen',
  'king',
  'ace',
] as const;

export type Rank = (typeof ranks)[number];

export default class Card {
  public suit: Suit;
  public rank: Rank;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
  }
}
