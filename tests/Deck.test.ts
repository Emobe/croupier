import Deck from '../src/Deck';
import test from 'tape';
import { mockDeck, mockShuffledDeck, mockTakenCards } from './deck.mocks';

test('Should create a deck', t => {
  t.plan(1);
  const deck = new Deck();
  const actual = deck.Cards;
  const expected = mockDeck;
  t.deepEqual(actual, expected);
});

test('Should shuffle a deck', t => {
  t.plan(1);
  const deck = new Deck();
  deck.shuffle(0.5);
  const actual = deck.Cards;
  const expected = mockShuffledDeck;
  t.deepEqual(actual, expected);
});

test('Should take cards from the deck', t => {
  t.plan(1);
  const deck = new Deck();
  const amount = 3;

  const expectedCardsTaken = mockTakenCards;

  const actualCardsTaken = deck.take(amount);

  t.deepEqual(actualCardsTaken, expectedCardsTaken);

  // TODO test that expected cards are left in the deck

  //const expectedCardsLeft = mockDeck.slice(-Math.abs(amount));
  //const actualCardsLeft = deck.Cards;

  //t.deepEqual(actualCardsLeft, expectedCardsLeft);
});
