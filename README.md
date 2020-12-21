# Croupier

### A libary written in typescript for representing a pack of cards

## Usage

```typescript
import Croupier from 'croupier';

const croupier = new Croupier();

const deck = Croupier.createShuffledDeck();

const hand = deck.take(2);

console.log(hand);
```
