import { test, describe, expect } from 'bun:test';
import { Deck } from '../src/Deck';
import { CardImpl } from '../src/Card';

describe('Deck', () => {
  test('should create a deck with 52 cards', () => {
    const deck = new Deck();
    expect(deck.size()).toBe(52);
  });

  test('should create a deck with all suits and ranks', () => {
    const deck = new Deck();
    const cards = [];
    
    while (!deck.isEmpty()) {
      const card = deck.deal();
      if (card) {
        cards.push(card);
      }
    }
    
    expect(cards.length).toBe(52);
    
    // Check that we have all suits
    const suits = new Set(cards.map(card => card.suit));
    expect(suits.size).toBe(4);
    
    // Check that we have all ranks
    const ranks = new Set(cards.map(card => card.rank));
    expect(ranks.size).toBe(13);
  });

  test('should shuffle cards', () => {
    const deck = new Deck();
    const originalCards = deck.size();
    
    deck.shuffle();
    
    // After shuffling, deck should still have the same number of cards
    expect(deck.size()).toBe(originalCards);
  });

  test('should deal cards correctly', () => {
    const deck = new Deck();
    const initialSize = deck.size();
    
    const card = deck.deal();
    expect(card).toBeInstanceOf(CardImpl);
    
    expect(deck.size()).toBe(initialSize - 1);
  });

  test('should return undefined when dealing from empty deck', () => {
    const deck = new Deck();
    
    // Deal all cards
    for (let i = 0; i < 52; i++) {
      deck.deal();
    }
    
    // Try to deal one more card
    const card = deck.deal();
    expect(card).toBeUndefined();
  });

  test('should peek at top card without removing it', () => {
    const deck = new Deck();
    const initialSize = deck.size();
    
    const card = deck.peek();
    expect(card).toBeInstanceOf(CardImpl);
    
    // Peek should not change the deck size
    expect(deck.size()).toBe(initialSize);
  });

  test('should return undefined when peeking from empty deck', () => {
    const deck = new Deck();
    
    // Deal all cards
    for (let i = 0; i < 52; i++) {
      deck.deal();
    }
    
    // Try to peek at empty deck
    const card = deck.peek();
    expect(card).toBeUndefined;
  });

  test('should reset deck to full 52 cards', () => {
    const deck = new Deck();
    
    // Deal some cards
    deck.deal();
    deck.deal();
    
    expect(deck.size()).toBe(50);
    
    // Reset the deck
    deck.reset();
    
    expect(deck.size()).toBe(52);
  });

  test('should deal multiple cards correctly', () => {
    const deck = new Deck();
    const initialSize = deck.size();
    
    const cards = deck.dealCards(5);
    
    expect(cards.length).toBe(5);
    expect(deck.size()).toBe(initialSize - 5);
    
    // Verify all dealt cards are instances of CardImpl
    cards.forEach(card => {
      expect(card).toBeInstanceOf(CardImpl);
    });
  });

  test('should deal fewer cards when deck is nearly empty', () => {
    const deck = new Deck();
    
    // Deal 50 cards
    deck.dealCards(50);
    
    // Try to deal 10 more cards (should only get 2)
    const cards = deck.dealCards(10);
    
    expect(cards.length).toBe(2);
    expect(deck.size()).toBe(0);
  });
});