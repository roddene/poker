/*
 *  Suits: 0 = hearts
 *  1 = diamonds
 *  2 = spades
 *  3 = clubs
 *  
 * 
 *  return {suit:string,rank:string}
 */

class Card {
    private _suit: number;
    private _rank: number;

    constructor(suit: number, num: number) {
        this._suit = suit;
        this._rank = num;
    }

    getCardData() {
        var s: string;
        var n: string;
        switch(this._suit){
            case 0:
                s = "hearts"
                break;
            case 1:
                s = "diamonds"
                break;
            case 2:
                s = "spades"
                break;
            default:
            s = "clubs"
            break;
        }
        switch(this._rank){
            case 9:
                n = "jack";
                break;
            case 10:
                n = "queen";
                break;
            case 11:
                n = "king";
                break;
            case 12:
                n = "ace";
                break;
            default:
                n = String(((this._rank+2)%13));
        }
        return {suit:s, rank:n};
    }

    public get rank(): number {
        return this._rank;
    }

    public get suit(): number {
        return this._suit;
    }
}

export default Card