import Card from "./card"
import Game from "./game"
import Player from "./player"
import Deck from "./deck"

function rankCounter(array: Card[]): {[key: number]: number} {
    var count: {[key: number]: number} = {};
    array.forEach(val => count[val.rank] = (count[val.rank] || 0) + 1);
    return count;
}

function suitCounter(array: Card[]): {[key: string]: number} {
    var count: {[key: number]: number} = {};
    array.forEach(val => count[val.suit] = (count[val.suit] || 0) + 1);
    return count;
}
 
function compare(a: Card, b: Card) {
    return a.rank - b.rank;
}
 
function findCard(hand: Card[], val: number): Card {
    for(var i = 0; i < hand.length; i++) {
        if(hand[i].rank == val) {
            return hand[i];
        }
    }
    return new Card(-1, -1);
}

function aceStraightHigh(hand: Card[]): Card[] {
    var aceHand: Card[] = [...hand];
    aceHand.forEach(card => {
        if (card.rank == 13) {
            aceHand[aceHand.length] = new Card(card.suit, 0);
        }
    });
    return aceHand;
}

function noDuplicates(hand: Card[]): Card[] {
    var noDupHand: Card[] = [];
    var dup: boolean = false;
    hand.forEach(card => {
        noDupHand.forEach(c => {
            if(card.rank == c.rank) {
                dup = true;
            }
        });
        if(!dup) {
            noDupHand[noDupHand.length] = card;
        }
    });
    return noDupHand;
}

function duplicates(hand: Card[]): Card[][] {
    let cardCounts: {[key: number]: number} = rankCounter(hand);
    let pairs: Card[] = [];
    let trips: Card[] = [];
    let quads: Card[] = [];
    console.log(cardCounts);
    Object.keys(cardCounts).forEach(key => {
        let count = cardCounts[parseInt(key)];
        if (count != 1) {
            let tempCard:Card = findCard(hand, parseInt(key));
            switch(count) {
                case 2:
                    pairs[pairs.length] = tempCard;
                    break;
                case 3:
                    trips[trips.length] = tempCard;
                    break;
                case 4:
                    quads[quads.length] = tempCard;
                    break;
            }
        }   
    });
    return [pairs, trips, quads];
}

function straightCheck(player: Player): boolean {
    let temp: Card[] = aceStraightHigh(player.hand);
    let strHand: Card[] = noDuplicates(temp);
    strHand.sort(compare);
    let i: number = 0;
    let straight: boolean = false;
    while(i <= strHand.length - 5) {
        for(let x = i; x < i + 4; x++) {
            if(strHand[x].rank != strHand[x+1].rank + 1) {
                break;
            }
            if (x == i + 3) {
                straight = true;
                player.bestCards = strHand.slice(x, x + 5);
            }
        }
    }
    return straight;
}

function flushCheck(player: Player): boolean {
    let flush: boolean = false;
    let fSuit: number = -1;
    let counts: {[key: number]: number} = suitCounter(player.hand);
    Object.keys(counts).forEach(key => {
        let suit:number = parseInt(key);
        let count: number = counts[suit];
        if (count >= 5) {
            flush = true;
            fSuit = suit;
        }
    });
    if (flush) {
        let flushCards: Card[] = [...player.hand];
        let bestCards: Card[] = [];
        flushCards.sort((a, b) => b.rank - a.rank);
        let i: number = 0;
        flushCards.forEach(card => {
            if (card.suit == fSuit && i < 5) {
                bestCards[bestCards.length] = card;
                i++;
            }
        });
        player.bestCards = bestCards;
    }
    return flush; 
}
 
function makeBestHand(player: Player) {
    let temp: number;
    let dups: Card[][] = duplicates(player.hand);

}

export {}