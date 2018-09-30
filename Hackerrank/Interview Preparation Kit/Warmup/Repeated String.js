function repeatedString(s, n) {
    if(!s.includes('a')) return 0;
    if(s == 'a') return n;
    
    let mult = Math.floor(n/s.length);
    let times = mult * atimes(s);
		let max = n - s.length*mult
    return (atimes(s,max)+times)
}

function atimes(s,max){
		let acum = 0;
    for(let i=0; i<s.length; i++){
    	if(max == 0) break;
      if(s[i] == 'a') acum++;
      max--
    }
    return acum;
}

const s = "aba"
const n = 10

repeatedString(s,n)