function plusMinus(arr) {
    let n = arr.length  
    console.log(((arr.filter(i => i>0)).length/n).toFixed(6))
    console.log(((arr.filter(i => i<0)).length/n).toFixed(6))
    console.log(((arr.filter(i => i==0)).length/n).toFixed(6))
}

let arr = [3,-8,2,-4,1,0,5,0]

plusMinus(arr)