import { mockDeck, mockShuffledDeck } from './deck.mocks';
import Deck from '../src/Deck';
import { Rank } from '../src/Card';

describe('Deck', () => {
  it('should create a deck with 52 cards', () => {
    const deck = new Deck({shuffle: false});
    expect(deck.Count).toBe(52);
  });
});

// TODO make it check an actual seed
describe('Deck Shuffle', () => {
  it('should shuffle the deck of cards', () => {
    const deck = new Deck({ shuffle: false });
    const firstCardPreShuffle = deck.Cards[0];
    deck.shuffle();
    const firstCardPostShuffle = deck.Cards[0];

    expect(firstCardPreShuffle).not.toEqual(firstCardPostShuffle);
  });
});

fdescribe('Deck Enum Tes', () => {
    const deck = new Deck({ shuffle: false });
    const firstCardPreShuffle = deck.Cards[0];
    expect(firstCardPreShuffle.rank).toBe(Rank.Two);

});

describe('Take Cards from Deck', () => {
  it('should take the specified number of cards from the deck', () => {
    const deck = new Deck();
    const cardsTaken = deck.take(5);
    
    expect(cardsTaken.length).toBe(5);
    expect(deck.Count).toBe(47);
  });
});