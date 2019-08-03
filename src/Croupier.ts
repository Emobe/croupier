import Card, { Suit, Rank } from './Card';

export default class Croupier {
  private cards: Card[] = [];
  public createDeck(shuffled: boolean = true, seed: number = Math.random()) {
    Object.keys(Suit).filter(suit => {
      Object.keys(Rank).filter(rank => {
        if (!isNaN(Number(rank))) {
          this.cards.push(
            new Card(
              Suit[suit as keyof typeof Suit],
              Rank[rank as keyof typeof Rank]
            )
          );
        }
      });
    });
    if (shuffled) {
      this.shuffle(this.cards, seed);
    }
  }

  public take(amount: number): Card[] {
    return this.cards.splice(-Math.abs(amount), amount);
  }

  public get Cards(): Card[] {
    return this.cards;
  }

  private shuffle(cards: Card[], seed: number) {
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
