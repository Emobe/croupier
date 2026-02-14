import { test, describe, expect } from 'bun:test';
import { CardImpl, type Card, type Suit, type Rank } from '../src/Card';

describe('CardImpl', () => {
  test('should create a card with correct suit and rank', () => {
    const card = new CardImpl('hearts', 'A');
    expect(card.suit).toBe('hearts');
    expect(card.rank).toBe('A');
  });

  test('should have correct card values', () => {
    const ace = new CardImpl('hearts', 'A');
    expect(ace.value).toBe(14);

    const king = new CardImpl('spades', 'K');
    expect(king.value).toBe(13);

    const queen = new CardImpl('clubs', 'Q');
    expect(queen.value).toBe(12);

    const jack = new CardImpl('diamonds', 'J');
    expect(jack.value).toBe(11);

    const ten = new CardImpl('hearts', '10');
    expect(ten.value).toBe(10);

    const two = new CardImpl('spades', '2');
    expect(two.value).toBe(2);
  });

  test('should convert to string correctly', () => {
    const card = new CardImpl('hearts', 'A');
    expect(card.toString()).toBe('A of hearts');
  });

  test('should check equality correctly', () => {
    const card1 = new CardImpl('hearts', 'A');
    const card2 = new CardImpl('hearts', 'A');
    const card3 = new CardImpl('spades', 'A');
    const card4 = new CardImpl('hearts', 'K');

    expect(card1.equals(card2)).toBe(true);
    expect(card1.equals(card3)).toBe(false);
    expect(card1.equals(card4)).toBe(false);
  });

  test('should check same suit correctly', () => {
    const card1 = new CardImpl('hearts', 'A');
    const card2 = new CardImpl('hearts', 'K');
    const card3 = new CardImpl('spades', 'A');

    expect(card1.isSameSuit(card2)).toBe(true);
    expect(card1.isSameSuit(card3)).toBe(false);
  });

  test('should check same rank correctly', () => {
    const card1 = new CardImpl('hearts', 'A');
    const card2 = new CardImpl('spades', 'A');
    const card3 = new CardImpl('hearts', 'K');

    expect(card1.isSameRank(card2)).toBe(true);
    expect(card1.isSameRank(card3)).toBe(false);
  });
});