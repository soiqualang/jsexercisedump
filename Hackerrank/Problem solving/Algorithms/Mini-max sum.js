function miniMaxSum(arr) {
    let sorted = arr.sort((a,b) => a-b)
    let max = sorted.slice(1,sorted.length).reduce((a,b) => a+b)
    let min = sorted.slice(0,sorted.length-1).reduce((a,b) => a+b)
    console.log(min,max)
}

let arreglo = [1,2,3,4,5];

console.log(miniMaxSum(arreglo));
