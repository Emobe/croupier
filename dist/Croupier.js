"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_1 = __importDefault(require("./Deck"));
class Croupier {
    createDeck(shuffled = true) {
        const deck = new Deck_1.default();
        if (shuffled) {
            this.shuffle(deck);
        }
        return deck;
    }
    shuffle(deck, seed = Math.random()) {
        const cards = Array.from(deck.Cards);
        let currentIndex = cards.length;
        let temporaryValue;
        let randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(seed * currentIndex);
            currentIndex -= 1;
            temporaryValue = cards[currentIndex];
            cards[currentIndex] = cards[randomIndex];
            cards[randomIndex] = temporaryValue;
            deck.Cards = new Set(cards);
        }
    }
    take(amount, deck) {
        const cards = Array.from(deck.Cards);
        return cards.splice(-Math.abs(amount), amount);
    }
}
exports.default = Croupier;
//# sourceMappingURL=Croupier.js.map