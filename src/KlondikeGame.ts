import { CardImpl, type Card, type Suit, type Rank } from './Card';
import { Deck } from './Deck';
import { Hand } from './Hand';

export type FoundationPile = Hand;
export type TableauPile = Hand;
export type StockPile = Hand;

export interface KlondikeState {
  stock: Card[];
  waste: Card[];
  foundations: FoundationPile[];
  tableau: TableauPile[];
  moves: number;
  isWon: boolean;
  isLost: boolean;
}

export class KlondikeGame {
  private stock: Hand;
  private waste: Hand;
  private foundations: FoundationPile[];
  private tableau: TableauPile[];
  private moves: number;
  private isWon: boolean;
  private isLost: boolean;

  constructor() {
    this.stock = new Hand();
    this.waste = new Hand();
    this.foundations = Array(4).fill(null).map(() => new Hand());
    this.tableau = Array(7).fill(null).map(() => new Hand());
    this.moves = 0;
    this.isWon = false;
    this.isLost = false;
    this.initializeGame();
  }

  private initializeGame(): void {
    // Create a new deck and shuffle it
    const deck = new Deck();
    deck.shuffle();
    
    // Deal cards to tableau piles
    let cardIndex = 0;
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j <= i; j++) {
        const card = deck.deal();
        if (card) {
          // Only the top card of each pile is face up
          if (j === i) {
            // Face up card
            this.tableau[i].addCard(card);
          } else {
            // Face down card (we'll represent this by storing a placeholder)
            this.tableau[i].addCard(card);
          }
        }
      }
    }
    
    // Remaining cards go to stock
    while (!deck.isEmpty()) {
      const card = deck.deal();
      if (card) {
        this.stock.addCard(card);
      }
    }
  }

  public drawFromStock(): void {
    if (this.stock.isEmpty()) {
      // Reset stock from waste
      if (!this.waste.isEmpty()) {
        // Flip all waste cards to stock (reverse order)
        const wasteCards = this.waste.getCards();
        this.waste.clear();
        for (let i = wasteCards.length - 1; i >= 0; i--) {
          this.stock.addCard(wasteCards[i]);
        }
      }
    } else {
      // Draw one card from stock to waste
      const card = this.stock.deal();
      if (card) {
        this.waste.addCard(card);
      }
    }
    this.moves++;
  }

  public moveToFoundation(card: Card, foundationIndex: number): boolean {
    if (foundationIndex < 0 || foundationIndex >= 4) {
      return false;
    }

    const foundation = this.foundations[foundationIndex];
    
    // Check if foundation is empty
    if (foundation.isEmpty()) {
      // Only Ace can be placed on empty foundation
      if (card.rank === 'A') {
        foundation.addCard(card);
        this.moves++;
        return true;
      }
      return false;
    }
    
    const topCard = foundation.getCardAt(foundation.size() - 1);
    if (!topCard) return false;
    
    // Check if card is next in suit sequence
    if (card.suit === topCard.suit && 
        this.getRankValue(card.rank) === this.getRankValue(topCard.rank) + 1) {
      foundation.addCard(card);
      this.moves++;
      this.checkWin();
      return true;
    }
    
    return false;
  }

  public moveToTableau(card: Card, tableauIndex: number): boolean {
    if (tableauIndex < 0 || tableauIndex >= 7) {
      return false;
    }

    const tableauPile = this.tableau[tableauIndex];
    
    // Check if pile is empty
    if (tableauPile.isEmpty()) {
      // Only King can be placed on empty tableau pile
      if (card.rank === 'K') {
        tableauPile.addCard(card);
        this.moves++;
        return true;
      }
      return false;
    }
    
    const topCard = tableauPile.getCardAt(tableauPile.size() - 1);
    if (!topCard) return false;
    
    // Check if card is of opposite color and one rank lower
    if (this.isOppositeColor(card, topCard) && 
        this.getRankValue(card.rank) === this.getRankValue(topCard.rank) - 1) {
      tableauPile.addCard(card);
      this.moves++;
      return true;
    }
    
    return false;
  }

  private isOppositeColor(card1: Card, card2: Card): boolean {
    const redSuits: Suit[] = ['hearts', 'diamonds'];
    const blackSuits: Suit[] = ['spades', 'clubs'];
    
    return (redSuits.includes(card1.suit) && blackSuits.includes(card2.suit)) ||
           (blackSuits.includes(card1.suit) && redSuits.includes(card2.suit));
  }

  private getRankValue(rank: Rank): number {
    const rankValues: Record<Rank, number> = {
      'A': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      'J': 11,
      'Q': 12,
      'K': 13
    };
    return rankValues[rank];
  }

  private checkWin(): void {
    // Check if all foundations have a King
    for (const foundation of this.foundations) {
      if (foundation.isEmpty() || foundation.getCardAt(foundation.size() - 1)?.rank !== 'K') {
        return;
      }
    }
    this.isWon = true;
  }

  public getState(): KlondikeState {
    return {
      stock: this.stock.getCards(),
      waste: this.waste.getCards(),
      foundations: this.foundations.map(f => f.getCards()),
      tableau: this.tableau.map(p => p.getCards()),
      moves: this.moves,
      isWon: this.isWon,
      isLost: this.isLost
    };
  }

  public getTableauPile(index: number): Card[] {
    if (index < 0 || index >= 7) return [];
    return this.tableau[index].getCards();
  }

  public getFoundationPile(index: number): Card[] {
    if (index < 0 || index >= 4) return [];
    return this.foundations[index].getCards();
  }

  public getStock(): Card[] {
    return this.stock.getCards();
  }

  public getWaste(): Card[] {
    return this.waste.getCards();
  }

  public isGameWon(): boolean {
    return this.isWon;
  }

  public isGameLost(): boolean {
    return this.isLost;
  }

  public getMoves(): number {
    return this.moves;
  }
}