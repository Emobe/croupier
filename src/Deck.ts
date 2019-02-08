import { default as Card, Rank, Suit, iCard } from "./Card";
export default class Deck {
  private cards: Array<Card> = [];

  fillDeck() {
    let rankValue: Rank;
    for (let suit in Suit) {
      for (let rank in Rank) {
        if (!isNaN(Number(rank))) {
          this.cards.push(
            new Card({
              suit: Suit[suit] as Suit,
              rank: Rank[rank as keyof typeof Rank]
            })
          );
        }
      }
    }
    return this;
  }

  shuffle() {
    let currentIndex = this.cards.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  get Cards(): Array<Card> {
    return this.cards;
  }

	take(amount: number): Array<Card>{
		return this.cards.splice(-Math.abs(amount), amount);
  }
  
  addToBottom(card: Card): void {
    this.cards.push(card);
  }
}
