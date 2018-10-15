let n = 262141
let binRes = ''
let acum = 0;
let result = 0

while(n != 0){
	binRes = (n%2).toString() + binRes
  n = Math.floor(n/2)
}

console.log(binRes)

for(let i=0; i< binRes.length; i++){
	if(binRes[i] == 1) {acum ++}
  if(acum > result) {result = acum}
  if(binRes[i] == 0) {acum = 0}
}

console.log(result)