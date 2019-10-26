import Card from './Card';
export default class Croupier {
    private cards;
    /**
     *
     * @param shuffled Whether the deck should be shuffled or not. Defaults to true
     * @param seed The seed used to shuffle the deck
     */
    createDeck(shuffled?: boolean, seed?: number): void;
    /**
     *
     * @param amount Returns specified number of cards and takes them from the top of the deck
     */
    take(amount: number): Card[];
    dealTo(players: any[], cb: (card: Card[]) => void): void;
    /**
     * Returns array of cards that the croupier has
     */
    readonly Cards: Card[];
    /**
     *
     * @param cards The cards to shuffle
     * @param seed The seed used to shuffle the cards
     */
    private shuffle;
}
