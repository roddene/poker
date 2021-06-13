import Deck from "./deck"
import Player from "./player"
import Card from "./card"

class Game {
    _deck: Deck;
    _pot: number[];
    _playerList: Player[];
    _table: Card[];

    constructor(playerList: Player[]) {
        this._deck = new Deck();
        this._pot = [0];
        this._playerList = playerList;
        this._table = [];
    }
}

export default Game