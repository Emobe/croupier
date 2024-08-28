import { it, describe, expect } from 'bun:test';
import Player from '../src/Player';
import Deck from '../src/Deck';

describe('Player', () => {
    it('should add cards to the player\'s hand', () => {
        const deck = new Deck();
        const player = new Player('PorridgeMan');
        const cards = [deck.Cards[0], deck.Cards[1]];
        player.addCards(cards);
        const result = player.hand.length;
        const expected = 2;
    });
    it('should remove cards from a player\'s hand', () => {
        const deck = new Deck();
        const player = new Player('PorridgeMan', deck.Cards);
        player.removeCards([0, 1]);
        const result = player.hand.length;
        const expected = 50;
        expect(result).toEqual(expected);
    });
});