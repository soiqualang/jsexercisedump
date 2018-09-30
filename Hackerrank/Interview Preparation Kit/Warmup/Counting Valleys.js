function countingValleys(n, s){
  let level = 0;
  let valleyCount = 0;
  for(let i=0; i<n; i++){
      if(s[i] == 'U') level++
      else level--
      if((level == 0) && (s[i] == 'U')) valleyCount++
  }
  return valleyCount
}

const n = 7
const s = 'UDDDDUU'

countingValleys(n,s)