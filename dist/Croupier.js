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
class Croupier {
    constructor() {
        this.cards = [];
    }
    /**
     *
     * @param shuffled Whether the deck should be shuffled or not. Defaults to true
     * @param seed The seed used to shuffle the deck
     */
    createDeck(shuffled = true, seed = Math.random()) {
        Object.keys(Card_1.Suit).filter(suit => {
            Object.keys(Card_1.Rank).filter(rank => {
                if (!isNaN(Number(rank))) {
                    this.cards.push(new Card_1.default(Card_1.Suit[suit], Card_1.Rank[rank]));
                }
            });
        });
        if (shuffled) {
            this.shuffle(this.cards, seed);
        }
    }
    /**
     *
     * @param amount Returns specified number of cards and takes them from the top of the deck
     */
    take(amount) {
        return this.cards.splice(-Math.abs(amount), amount);
    }
    dealTo(players, cb) {
        players.forEach(player => {
            cb(this.take(1));
        });
    }
    /**
     * Returns array of cards that the croupier has
     */
    get Cards() {
        return this.cards;
    }
    /**
     *
     * @param cards The cards to shuffle
     * @param seed The seed used to shuffle the cards
     */
    shuffle(cards, seed) {
        let currentIndex = cards.length;
        let temporaryValue;
        let randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(seed * currentIndex);
            currentIndex -= 1;
            temporaryValue = cards[currentIndex];
            cards[currentIndex] = cards[randomIndex];
            cards[randomIndex] = temporaryValue;
        }
    }
}
exports.default = Croupier;
//# sourceMappingURL=Croupier.js.map