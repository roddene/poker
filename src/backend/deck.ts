import Card from "./card";

class Deck {
    deck: Card[];

    constructor() {
        var numbers: number[] = [...Array.from(Array(52).keys())]
        var cards: Card[] = Array(52);
        for(var i = 0; i < numbers.length; i++) {
            if (i % 13 == 0) {
                cards[i] = new Card(~~(i / 13), 13);
            } else {
                cards[i] = new Card(~~(i / 13), i % 13);
            }
        }
        this.deck = cards;
    }
}

export default Deck