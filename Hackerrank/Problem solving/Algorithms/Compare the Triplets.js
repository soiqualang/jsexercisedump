function compareTriplets(a, b) {
    let result = [0,0]
    for(let i=0; i<3; i++){
        if(a[i] > b[i]){
            result[0]++
        }
        else if(a[i] < b[i]){
            result[1]++
        }
    }
    return result;
}

let tripletA = [1,2,3]
let tripletB = [3,4,2]

console.log(compareTriplets(tripletA,tripletB));