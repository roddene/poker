import Card from "./card";

class Player {
    private _name: string;
    private _stack: number;
    private _play: boolean;
    private _betVal: number;
    private _gameID: number;
    private _serverID: number;
    private _hand: Card[];
    private _bestCards: Card[];
    private _handPower: number;

    constructor(name: string, stack: number, serverID: number) {
        this._name = name;
        this._stack = stack;
        this._play = false;
        this._betVal = 0;
        this._gameID = -1;
        this._serverID = serverID;
        this._hand = [];
        this._bestCards = [];
        this._handPower = -1;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get stack(): number {
        return this._stack;
    }

    public set stack(stack: number) {
        this._stack += stack;
    }

    public get play(): boolean {
        return this._play;
    }

    public set play(play: boolean) {
        this._play = play;
    }

    public get betVal(): number {
        return this._betVal;
    }

    public set betVal(betVal: number) {
        this._betVal = betVal;
    }

    public get gameID(): number {
        return this._gameID;
    }

    public set gameID(gameID: number) {
        this._gameID = gameID;
    }

    public get serverID(): number {
        return this._serverID;
    }

    public set serverID(serverID: number) {
        this._serverID = serverID;
    }

    public get hand(): Card[] {
        return this._hand;
    }

    public set hand(hand: Card[]) {
        this._hand = hand;
    }

    public get bestCards(): Card[] {
        return this._bestCards;
    }

    public set bestCards(hand: Card[]) {
        this._bestCards = hand; 
    }

    public giveStartingCash() {
        this.stack += 1500;
    }
}

export default Player;