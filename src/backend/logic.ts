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
    pairs.sort((a, b) => b.rank - a.rank);
    trips.sort((a, b) => b.rank - a.rank);
    return [pairs, trips, quads];
}

function straightCheck(player: Player): boolean {
    let temp: Card[] = aceStraightHigh(player.fullHand);
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
    let counts: {[key: number]: number} = suitCounter(player.fullHand);
    Object.keys(counts).forEach(key => {
        let suit:number = parseInt(key);
        let count: number = counts[suit];
        if (count >= 5) {
            flush = true;
            fSuit = suit;
        }
    });
    if (flush) {
        let flushCards: Card[] = [...player.fullHand];
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

function fullHouseCheck(duplicates: Card[][], player: Player): boolean {
    let fullHouse: boolean = false;
    if (duplicates[0].length > 0 && duplicates[1].length > 0) {
        fullHouse = true;
    } else if (duplicates[1].length > 1) {
        fullHouse = true;
    }
    if (fullHouse) {
        let fullHouseCards: Card[] = [];
        if (duplicates[1].length == 1) {
            for(let i = 0; i < 5; i++) {
                if (i < 3) {
                    fullHouseCards.push(duplicates[1][0]);
                } else {
                    fullHouseCards.push(duplicates[0][0]);
                }
            }
        } else {
            for(let i = 0; i < 5; i++) {
                if (i < 3) {
                    fullHouseCards.push(duplicates[1][1]);
                } else {
                    fullHouseCards.push(duplicates[1][0]);
                }
            }
        }
        player.bestCards = fullHouseCards;
    }
    return fullHouse;
}

function straightFlushCheck(player: Player): boolean {
    let flush: boolean = false;
    let straight: boolean = false;
    let fSuit: number = -1;
    let counts: {[key: number]: number} = suitCounter(player.fullHand);
    Object.keys(counts).forEach(key => {
        let suit:number = parseInt(key);
        let count: number = counts[suit];
        if (count >= 5) {
            flush = true;
            fSuit = suit;
        }
    });
    if (flush) {
        let flushCards: Card[] = [...player.fullHand];
        let bestCards: Card[] = [];
        flushCards.sort((a, b) => b.rank - a.rank);
        let i: number = 0;
        flushCards.forEach(card => {
             if (card.suit == fSuit && i < 5) {
                bestCards[bestCards.length] = card;
                i++;
            }
        });
        let temp: Card[] = aceStraightHigh(bestCards);
        let strHand: Card[] = noDuplicates(temp);
        strHand.sort(compare);
        let j: number = 0;
        while(i <= strHand.length - 5) {
            for(let x = j; x < j + 4; x++) {
                if(strHand[x].rank != strHand[x+1].rank + 1) {
                    break;
                }
                if (x == i + 3) {
                    straight = true;
                    player.bestCards = strHand.slice(x, x + 5);
                }
            }
        }
    }
    return flush && straight;
}

function highCards(player: Player) {
    let inHand: boolean = false;
    let cardsInHand: number = player.bestCards.length;
    player.fullHand.forEach(card => {
        player.bestCards.forEach(c => {
            if (c.rank == card.rank) {
                inHand == true;
            }
        });
        if (!inHand && cardsInHand < 5) {
            player.bestCards.push(card);
            cardsInHand ++;
        }
        inHand = false;
    });
}

function getDupHand(duplicates: Card[][], player: Player) {
    if (duplicates[2].length > 0) {
        for (let i = 0; i < 4; i++) {
            player.bestCards.push(duplicates[2][0]);
        }
        highCards(player);
    } else if (duplicates[1].length > 0) {
        for (let i = 0; i < 3; i++) {
            player.bestCards.push(duplicates[1][0]);
        }
        highCards(player);
    } else if (duplicates[0].length > 1) {
        for (let i = 0; i < 4; i++) {
            if (i < 2) {
                player.bestCards.push(duplicates[0][0]);
            } else {
                player.bestCards.push(duplicates[0][1]);
            }
        }
    }
}

function makeBestHand(player: Player) {
    let temp: number;
    let dups: Card[][] = duplicates(player.fullHand);
    let power: number = -1;
    if (straightFlushCheck(player)) {
        player.handPower = 8;
    } else if (dups[2].length > 0) {
        getDupHand(dups, player);
        player.handPower = 7;
    } else if (fullHouseCheck(dups, player)) {
        player.handPower = 6;
    } else if (flushCheck(player)) {
        player.handPower = 5;
    } else if (straightCheck(player)) {
        player.handPower = 4;
    } else if (dups[1].length > 0) {
        getDupHand(dups, player);
        player.handPower = 3;
    } else if (dups[0].length > 1) {
        getDupHand(dups, player);
        player.handPower = 2;
    } else if (dups[0].length > 0) {
        getDupHand(dups, player);
        player.handPower = 1;
    } else {
        highCards(player);
        player.handPower = 0;
    }
}

export {makeBestHand}