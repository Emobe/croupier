import Card from './Card';
import Deck from './Deck';

export default class Croupier {
  public createDeck(shuffled: boolean = true) {
    const deck = new Deck();
    if (shuffled) {
      this.shuffle(deck);
    }
    return deck;
  }

  public shuffle(deck: Deck, seed: number = Math.random()) {
    const cards = Array.from(deck.Cards);
    let currentIndex = cards.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(seed * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;

      deck.Cards = new Set(cards);
    }
  }
  public take(amount: number, deck: Deck): Card[] {
    const cards = Array.from(deck.Cards);
    return cards.splice(-Math.abs(amount), amount);
  }
}
