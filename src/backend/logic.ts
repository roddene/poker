import Card from "./card"
import Game from "./game"
import Player from "./player"
import Deck from "./deck"

function Counter(array: Card[]) {
    var count: {[key: number]: number} = {};
    array.forEach(val => count[val.rank] = (count[val.rank] || 0) + 1);
    return count;
}

function makeBestHand(game: Game) {

}
export {}