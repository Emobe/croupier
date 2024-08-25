import { describe, it, expect } from 'bun:test';
import { mockDeck } from './deck.mocks';
import Deck from '../src/Deck';
import Card from '../src/Card';

describe('Deck', () => {
  it('should create a deck with no options passed', () => {
    const deck = new Deck();
    expect(deck).toBeTruthy();
  });
  it('should create a deck of unshuffled cards', () => {
    const deck = new Deck({ shuffle: false });
    expect(deck.Cards).toEqual(mockDeck);
  });

  it('should create a shuffled deck of cards with specified seed', () => {
    const seed = 0.5;
    const deck = new Deck({ seed });
    const deck2 = new Deck({ seed });
    expect(deck.Cards).toEqual(deck2.Cards);
  });

  it('should be able to take X amount of cards from the deck', () => {
    const seed = 0.5;
    const deck = new Deck({ seed });
    const countToTake = 5;
    const hand = deck.take(countToTake);
    expect(hand).toHaveLength(countToTake);
    expect(deck.Count).toEqual(47);
  });

  it('should throw an error when user tries to take more cards than are left', () => {
    const seed = 0.5;
    const deck = new Deck({ seed });
    const countToTake = 55;
    expect(() => deck.take(countToTake)).toThrow();
  });

  it('should remove specified card', () => {
    //const seed = 0.5;
    //const deck = new Deck({ seed });
  });

  it('should add two jokers to the start of unshuffled deck', () => {
    const deck = new Deck({ jokers: true, shuffle: false });
    expect(deck.Cards[0].rank).toEqual('joker');
    expect(deck.Cards[0].suit).toEqual('joker');
    expect(deck.Cards[1].rank).toEqual('joker');
    expect(deck.Cards[1].suit).toEqual('joker');
  });
});
