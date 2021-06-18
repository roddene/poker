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
    private _fullHand: Card[];

    constructor(name: string, stack: number, serverID: number) {
        this._name = name;
        this._stack = stack;
        this._play = false;
        this._betVal = 0;
        this._gameID = -1;
        this._serverID = serverID;
        this._hand = [];
        this._fullHand = [];
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

    public get handPower(): number {
        return this._handPower;
    }

    public set handPower(hp: number) {
        this._handPower = hp;
    }

    public giveStartingCash() {
        this.stack += 1500;
    }
    public get fullHand(): Card[] {
        return this._fullHand;
    }
    public updateFullHand(table: Card[]) {
        this._fullHand = this._hand;
        table.forEach(card => {
            this._fullHand.push(card);
        });
    }
}

export default Player;