function countingValleys(n, s){
    let level = 0;
    let valleyCount = 0;
    for(let i=0; i<n; i++){
        if(s[i] == 'U') level++
        if(s[i] == 'D') level--
        if((level == 0) && (s[i] == 'U')) valleyCount++
    }
    return valleyCount
}

const n = 8
const s = 'UDDDUDUU'

console.log(countingValleys(n,s))