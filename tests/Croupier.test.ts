import Card from '../src/Card';
import Croupier from '../src/Croupier';
import test from 'tape';

import sinon from 'sinon';

// TODO spy on Deck
test.skip('Croupier calls Deck constructor', t => {
  t.plan(1);
  const croupier = new Croupier();
});
