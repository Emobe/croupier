import Deck from './Deck';

export default class Croupier {
  createDeck(): Deck {
    return new Deck();
  }

  createShuffledDeck(): Deck {
    const deck = new Deck();
    deck.shuffle();
    return deck;
  }
}
