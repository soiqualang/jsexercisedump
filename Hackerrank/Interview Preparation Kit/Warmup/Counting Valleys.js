function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;
    while(i < c.length-1){
    	if(c[i+1] == 1 || c[i+2] == 0) i += 2;
      else i++;
      jumps++
    }
    return jumps
}

const c = [0,0,1,0,0,1,0]

console.log(jumpingOnClouds(c))