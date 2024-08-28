import Card from './Card';
import type { Hand } from "./Hand";

class Player {
    name: string;
    hand: Hand = [];
    score: number = 0
    constructor(name: string, hand?: Hand, score?: number) {
        this.name = name;
        if (hand) {
            this.hand = hand;
        }
        if (score) {
            this.score = score;
        }
    }

    addCards(cards: Card[]): void{
        this.hand.push(cards);
    }

    removeCards(indeces: number[]): void{
        for(let i = 0; i < indeces.length; i++){
            this.hand.splice(indeces[i], 1);
        }
    }

}

export default Player;