let images:{id:string,src:string,suit:string,rank:string}[] = []

for(let i = 0;i<52;i++){
    let suit:string = '';
    let rank:string = '';
    switch(i%4){
        case 0:
            suit = "hearts"
            break;
        case 1:
            suit = "diamonds"
            break;
        case 2:
            suit = "spades"
            break;
        default:
        suit = "clubs"
        break;
    }
    switch(i%13){
        case 9:
            rank = "jack";
            break;
        case 10:
            rank = "queen";
            break;
        case 11:
            rank = "king";
            break;
        case 12:
            rank = "ace";
            break;
        default:
            rank = String(((i+2)%13));
    }



    images.push({suit:suit,rank:rank, src:('./svg-cards/'+rank+'_of_'+suit+'.svg'),id:rank+' of '+suit})
}



export default images;