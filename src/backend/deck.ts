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

    public shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        
            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

export default Deck