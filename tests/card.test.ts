import { describe, it, expect } from 'bun:test';
import Card from '../src/Card';

describe('Card', () => {
  it('should create a card with valid rank and suit', () => {
    const suit = 'diamonds';
    const rank = 'six';

    const card = new Card(suit, rank);

    expect(card.suit).toBe(suit);
    expect(card.rank).toBe(rank);
  });

  it('should return the card as a string', () => {
    const suit = 'diamonds';
    const rank = 'six';

    const card = new Card(suit, rank);
    expect(card.toString()).toBe('six of diamonds');
  });
});
