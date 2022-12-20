import { mockDeck, mockShuffledDeck } from './deck.mocks';
import Deck from '../src/Deck';

describe('Deck', () => {
  it('should create a deck of unshuffled cards', () => {
    const deck = new Deck({ shuffle: false });
    expect(deck.Cards).toEqual(mockDeck);
  });

  it('should create a shuffled deck of cards with specified seed', () => {
    const seed = 0.5;
    const deck = new Deck({ seed });
    expect(deck.Cards).toEqual(mockShuffledDeck);
  });

  it('should be able to take X amount of cards from the deck', () => {
    const seed = 0.5;
    const deck = new Deck({ seed });
    const countToTake = 5;
    const hand = deck.take(countToTake);
    expect(hand).toHaveLength(countToTake);
    expect(deck.Count).toEqual(47);
  });
});
