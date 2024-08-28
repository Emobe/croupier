import { it, describe, expect } from 'bun:test';
import GameState from '../src/GameState';
import Player from '../src/Player';
import Deck from '../src/Deck';

describe('GameState', () => {
    it('should initialise', () => {

    });

    it('should return current player\'s turn', () => {
        const players = [
            new Player('Johnny Test'),
            new Player('PorridgeMan')
        ]
        const deck = new Deck();
        const state = new GameState(players, deck)

        const result = state.getCurrentPlayer();
        const expected = players[0];
        expect(result).toEqual(expected);
    });

    it('should go to the next turn', () => {
        const players = [
            new Player('Johnny Test'),
            new Player('PorridgeMan')
        ]
        const deck = new Deck();
        const state = new GameState(players, deck)

        state.nextTurn();
        const result = state.getCurrentPlayer();
        const expected = players[1];
        expect(result).toEqual(expected);
    });
})