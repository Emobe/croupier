"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = __importStar(require("./Card"));
class Deck {
    /**
     * Create a deck of cards
     */
    constructor() {
        this.cards = [];
        Object.keys(Card_1.Suit).filter(suit => {
            Object.keys(Card_1.Rank).filter(rank => {
                if (!isNaN(Number(rank))) {
                    this.cards.push(new Card_1.default(Card_1.Suit[suit], Card_1.Rank[rank]));
                }
            });
        });
    }
    /**
     * Returns an array of cards in the deck
     */
    get Cards() {
        return this.cards;
    }
    set Cards(cards) {
        this.cards = cards;
    }
}
exports.default = Deck;
//# sourceMappingURL=Deck.js.map