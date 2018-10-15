function processData(input) {
    let inputData = input.split('\n').slice(1)
    inputData.forEach((str) => {
        let str1 = ""; let str2 = "";
        for(let i=0; i<str.length; i++){
          (i%2) ? (str1 += str[i]) : (str2 += str[i])
      }
            console.log(str2,str1)
    })
}

let arr = '2\nHacker\nRank';
processData(arr);