function loop(x1,v1,x2,v2){
    if(x1 > x2){
        while(x1 != x2){
            if (v1 > v2) {return 'NO'}
            x1 += v1
            x2 += v2
            if(x2 > x1) {return 'NO'}
            else if (x1 == x2) {return 'YES'}
        }
    }
}

function kangaroo(x1, v1, x2, v2) {
    if(x1 != x2 && v1 == v2) return 'NO'
	if(x1 > x2) return loop(x1,v1,x2,v2)
	else if(x2 > x1) return loop(x2,v2,x1,v1)
    else return 'YES'
}

const x1 = 0;
const v1 = 2;
const x2 = 5;
const v2 = 3;

let result = kangaroo(x1,v1,x2,v2)

console.log(result)