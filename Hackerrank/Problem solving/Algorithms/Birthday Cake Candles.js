function birthdayCakeCandles(ar) {
    let sorted = ar.sort((a,b)=>b-a)
    let i = 0;
    let n = 0;
    while(sorted[i] === sorted[0] && sorted[i] != undefined){i++; n++}
    console.log(n)
}

let candles = [3,2,1,3]

birthdayCakeCandles(candles);