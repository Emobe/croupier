import { test, describe, expect } from 'bun:test';
import { CardImpl, type Card, type Suit, type Rank } from '../src/Card';

describe('CardImpl', () => {
  test('should create a card with correct suit and rank', () => {
    const card = new CardImpl('hearts', 'A');
    expect(card.suit).toBe('hearts');
    expect(card.rank).toBe('A');
  });

  test('should have correct value for each rank', () => {
    const cardA = new CardImpl('hearts', 'A');
    expect(cardA.value).toBe(14);

    const cardK = new CardImpl('spades', 'K');
    expect(cardK.value).toBe(13);

    const cardQ = new CardImpl('clubs', 'Q');
    expect(cardQ.value).toBe(12);

    const cardJ = new CardImpl('diamonds', 'J');
    expect(cardJ.value).toBe(11);

    const card10 = new CardImpl('hearts', '10');
    expect(card10.value).toBe(10);

    const card2 = new CardImpl('spades', '2');
    expect(card2.value).toBe(2);
  });

  test('should convert to string correctly', () => {
    const card = new CardImpl('hearts', 'A');
    expect(card.toString()).toBe('A of hearts');
  });

  test('should compare cards correctly', () => {
    const card1 = new CardImpl('hearts', 'A');
    const card2 = new CardImpl('hearts', 'A');
    const card3 = new CardImpl('spades', 'A');
    const card4 = new CardImpl('hearts', 'K');

    expect(card1.equals(card2)).toBe(true);
    expect(card1.equals(card3)).toBe(false);
    expect(card1.equals(card4)).toBe(false);
  });

  test('should check suit equality correctly', () => {
    const card1 = new CardImpl('hearts', 'A');
    const card2 = new CardImpl('hearts', 'K');
    const card3 = new CardImpl('spades', 'A');

    expect(card1.isSameSuit(card2)).toBe(true);
    expect(card1.isSameSuit(card3)).toBe(false);
  });

  test('should check rank equality correctly', () => {
    const card1 = new CardImpl('hearts', 'A');
    const card2 = new CardImpl('spades', 'A');
    const card3 = new CardImpl('hearts', 'K');

    expect(card1.isSameRank(card2)).toBe(true);
    expect(card1.isSameRank(card3)).toBe(false);
  });
});