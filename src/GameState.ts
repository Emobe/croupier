import type  Deck from "./Deck";
import type Player from "./Player";

export enum GamePhase {
    Setup,
    Playing,
    Ending
}
export interface Action {
    player: Player
}
class GameState {
    players: Player[];
    deck: Deck;
    currentPlayerIndex: number = 0;
    currentGamePhase: GamePhase = GamePhase.Setup;
    actions: Action[] = [];

    constructor(players: Player[], deck: Deck, currentGamePhase: GamePhase = GamePhase.Setup){
        this.players = players;
        this.deck = deck;
        this.currentGamePhase = currentGamePhase;
    }

    getCurrentPlayer(): Player{
        return this.players[this.currentPlayerIndex];
    }

    nextTurn(): void {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

    recordAction(action: Action): void {
        this.actions.push(action);
    }

    setPhase(phase: GamePhase){
        this.currentGamePhase = phase;
    }
}

export default GameState;