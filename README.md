# Croupier

### A libary written in typescript for representing a pack of cards

## Usage

```typescript
import { Deck } from 'croupier';

const deck = new Deck();
console.log(deck.Count);

const handOne = deck.take(2);

console.log(deck.Count);
console.log(handOne);
```
