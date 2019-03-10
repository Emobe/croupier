import Card from './Card';
import Deck from './Deck';
export default class Croupier {
  createDeck(shuffled?: boolean): Deck;
  shuffle(deck: Deck, seed?: number): void;
  take(amount: number, deck: Deck): Card[];
}
