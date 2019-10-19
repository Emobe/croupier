import Card, { Rank, Suit } from './Card';

export default class Croupier {
  private cards: Card[] = [];
  /**
   *
   * @param shuffled Whether the deck should be shuffled or not. Defaults to true
   * @param seed The seed used to shuffle the deck
   */
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

  /**
   *
   * @param amount Returns specified number of cards and takes them from the top of the deck
   */
  public take(amount: number): Card[] {
    return this.cards.splice(-Math.abs(amount), amount);
  }

  /**
   * Returns array of cards that the croupier has
   */
  public get Cards(): Card[] {
    return this.cards;
  }

  /**
   *
   * @param cards The cards to shuffle
   * @param seed The seed used to shuffle the cards
   */
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
