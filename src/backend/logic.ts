import Card from "./card"

function Counter(array: Card[]) {
    var count: {[key: number]: number} = {};
    array.forEach(val => count[val.rank] = (count[val.rank] || 0) + 1);
    return count;
}



export {}