function reverseArray(a) {
    let result =[]
    for(let i=0; i<a.length; i++){
        result[i] = a[(a.length-1)-i]
    }
    return result;
}

const arr = [1,4,2,3];
const res = reverseArray(arr);

console.log(res.join(' ') + '\n');

