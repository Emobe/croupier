import { test, describe, expect, assert } from 'bun:test';
import { Hand } from '../src/Hand';
import { CardImpl } from '../src/Card';

describe('Hand', () => {
  test('should create an empty hand', () => {
    const hand = new Hand();
    expect(hand.isEmpty()).toBe(true);
    expect(hand.size()).toBe(0);
  });

  test('should add cards to hand', () => {
    const hand = new Hand();
    const card = new CardImpl('hearts', 'A');
    
    hand.addCard(card);
    
    expect(hand.isEmpty()).toBe(false);
    expect(hand.size()).toBe(1);
  });

  test('should remove cards from hand', () => {
    const hand = new Hand();
    const card1 = new CardImpl('hearts', 'A');
    const card2 = new CardImpl('spades', 'K');
    
    hand.addCard(card1);
    hand.addCard(card2);
    
    expect(hand.size()).toBe(2);
    
    const removed = hand.removeCard(card1);
    expect(removed).toBe(true);
    expect(hand.size()).toBe(1);
    
    const removed2 = hand.removeCard(card1); // Try to remove already removed card
    expect(removed2).toBe(false);
    expect(hand.size()).toBe(1);
  });

  test('should remove card at specific index', () => {
    const hand = new Hand();
    const card1 = new CardImpl('hearts', 'A');
    const card2 = new CardImpl('spades', 'K');
    const card3 = new CardImpl('clubs', 'Q');
    
    hand.addCard(card1);
    hand.addCard(card2);
    hand.addCard(card3);
    
    expect(hand.size()).toBe(3);
    
    const removedCard = hand.removeCardAt(1);
    expect(removedCard).toBeDefined();
    expect(removedCard).toBeInstanceOf(CardImpl);
    expect(removedCard!.rank).toBe('K');
    expect(hand.size()).toBe(2);
  });

  test('should get all cards from hand', () => {
    const hand = new Hand();
    const card1 = new CardImpl('hearts', 'A');
    const card2 = new CardImpl('spades', 'K');
    
    hand.addCard(card1);
    hand.addCard(card2);
    
    const cards = hand.getCards();
    expect(cards.length).toBe(2);
    expect(cards[0].rank).toBe('A');
    expect(cards[1].rank).toBe('K');
    
    // Verify original hand is unchanged
    expect(hand.size()).toBe(2);
  });

  test('should clear hand', () => {
    const hand = new Hand();
    const card = new CardImpl('hearts', 'A');
    
    hand.addCard(card);
    expect(hand.size()).toBe(1);
    
    hand.clear();
    expect(hand.isEmpty()).toBe(true);
    expect(hand.size()).toBe(0);
  });

  test('should sort hand by card value', () => {
    const hand = new Hand();
    const card1 = new CardImpl('hearts', 'A');
    const card2 = new CardImpl('spades', 'K');
    const card3 = new CardImpl('clubs', '2');
    
    hand.addCard(card3);
    hand.addCard(card1);
    hand.addCard(card2);
    
    // Before sorting
    const cardsBefore = hand.getCards();
    expect(cardsBefore[0].rank).toBe('2');
    expect(cardsBefore[1].rank).toBe('A');
    expect(cardsBefore[2].rank).toBe('K');
    
    hand.sort();
    
    // After sorting (should be in descending order)
    const cardsAfter = hand.getCards();
    expect(cardsAfter[0].rank).toBe('A');
    expect(cardsAfter[1].rank).toBe('K');
    expect(cardsAfter[2].rank).toBe('2');
  });

  test('should get cards by suit', () => {
    const hand = new Hand();
    const heartA = new CardImpl('hearts', 'A');
    const heartK = new CardImpl('hearts', 'K');
    const spadeA = new CardImpl('spades', 'A');
    
    hand.addCard(heartA);
    hand.addCard(heartK);
    hand.addCard(spadeA);
    
    const hearts = hand.getCardsBySuit('hearts');
    expect(hearts.length).toBe(2);
    expect(hearts[0].rank).toBe('A');
    expect(hearts[1].rank).toBe('K');
    
    const spades = hand.getCardsBySuit('spades');
    expect(spades.length).toBe(1);
    expect(spades[0].rank).toBe('A');
  });

  test('should get cards by rank', () => {
    const hand = new Hand();
    const heartA = new CardImpl('hearts', 'A');
    const spadeA = new CardImpl('spades', 'A');
    const clubA = new CardImpl('clubs', 'A');
    const heartK = new CardImpl('hearts', 'K');
    
    hand.addCard(heartA);
    hand.addCard(spadeA);
    hand.addCard(clubA);
    hand.addCard(heartK);
    
    const aces = hand.getCardsByRank('A');
    expect(aces.length).toBe(3);
    expect(aces[0].suit).toBe('hearts');
    expect(aces[1].suit).toBe('spades');
    expect(aces[2].suit).toBe('clubs');
    
    const kings = hand.getCardsByRank('K');
    expect(kings.length).toBe(1);
    expect(kings[0].suit).toBe('hearts');
  });

  test('should check if hand contains a specific card', () => {
    const hand = new Hand();
    const card1 = new CardImpl('hearts', 'A');
    const card2 = new CardImpl('spades', 'K');
    
    hand.addCard(card1);
    
    expect(hand.containsCard(card1)).toBe(true);
    expect(hand.containsCard(card2)).toBe(false);
  });

  test('should get card at specific index', () => {
    const hand = new Hand();
    const card1 = new CardImpl('hearts', 'A');
    const card2 = new CardImpl('spades', 'K');
    
    hand.addCard(card1);
    hand.addCard(card2);
    
    const cardAt0 = hand.getCardAt(0);
    expect(cardAt0).toBeInstanceOf(CardImpl);
    expect(cardAt0.rank).toBe('A');
    
    const cardAt1 = hand.getCardAt(1);
    expect(cardAt1).toBeInstanceOf(CardImpl);
    expect(cardAt1.rank).toBe('K');
    
    const cardAtInvalid = hand.getCardAt(-1);
    expect(cardAtInvalid).toBe(undefined);
    
    const cardAtOutOfBounds = hand.getCardAt(5);
    expect(cardAtOutOfBounds).toBe(undefined);
  });
});