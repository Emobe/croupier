"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Suit;
(function (Suit) {
    Suit["Diamonds"] = "Diamonds";
    Suit["Spades"] = "Spades";
    Suit["Hearts"] = "Hearts";
    Suit["Clubs"] = "Clubs";
})(Suit = exports.Suit || (exports.Suit = {}));
var Rank;
(function (Rank) {
    Rank[Rank["Two"] = 0] = "Two";
    Rank[Rank["Three"] = 1] = "Three";
    Rank[Rank["Four"] = 2] = "Four";
    Rank[Rank["Five"] = 3] = "Five";
    Rank[Rank["Six"] = 4] = "Six";
    Rank[Rank["Seven"] = 5] = "Seven";
    Rank[Rank["Eight"] = 6] = "Eight";
    Rank[Rank["Nine"] = 7] = "Nine";
    Rank[Rank["Ten"] = 8] = "Ten";
    Rank[Rank["Jack"] = 9] = "Jack";
    Rank[Rank["Queen"] = 10] = "Queen";
    Rank[Rank["King"] = 11] = "King";
    Rank[Rank["Ace"] = 12] = "Ace";
})(Rank = exports.Rank || (exports.Rank = {}));
class Card {
    constructor(card) {
        this.suit = card.suit;
        this.rank = card.rank;
    }
}
exports.default = Card;
//# sourceMappingURL=Card.js.map