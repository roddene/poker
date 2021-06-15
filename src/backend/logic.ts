import Card from "./card"
import Game from "./game"
import Player from "./player"
import Deck from "./deck"

function Counter(array: Card[]) {
    var count: {[key: number]: number} = {};
    array.forEach(val => count[val.rank] = (count[val.rank] || 0) + 1);
    return count;
}

function findCard(hand: Card[], val: number): Card {
    for(var i = 0; i < hand.length; i++) {
        if(hand[i].rank == val) {
            return hand[i];
        }
    }
    return new Card(-1, -1);
}

function duplicates(hand: Card[], pairs: Card[], trips: Card[], quads: Card[]) {
    var cardCounts: {[key: number]: number} = Counter(hand);
    console.log(cardCounts);
    // key is refusing to not be a string and I have no idea why so im quitting.
    Object.keys(cardCounts).forEach(key => {
        let count = cardCounts[parseInt(key)];
    });
}

function makeBestHand(hand: Card[]) {
    var temp: number;
}


duplicates([new Card(0, 1)], [], [], [])
export {}