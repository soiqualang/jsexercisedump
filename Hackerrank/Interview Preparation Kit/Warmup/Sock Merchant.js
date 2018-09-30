function sockMerchant(n, ar) {
    let checked = [];
    let cont,results = 0;
    for(let i=0; i<n; i++){
        if(checked.find(a => a == ar[i]) == undefined){
            cont = 0;
            ar.map(num => {
                if (ar[i] == num) cont++;
            })
            results += Math.floor(cont/2)
            checked.push(ar[i]);
        }
    }
    return results;
}

const n = 6

const ar = [1,2,3,2,3,2,1]

let result = sockMerchant(n, ar);

console.log(result)
