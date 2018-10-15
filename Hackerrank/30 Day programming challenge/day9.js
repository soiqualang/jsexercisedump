function processData(input) {
    let inputData = input.split('\n')
    let n = parseInt(inputData[0],10) + 1;
    let phoneBook = {};

    for(let i=1; i<n; i++){
    	phoneBook[(inputData[i].split(' '))[0]] = (inputData[i].split(' '))[1]
    }
    
    for(let i=n, max = inputData.length; i<max; i++){
    	if(phoneBook[inputData[i]] != undefined){
      	console.log(inputData[i] + '=' + phoneBook[inputData[i]])
      }
      else console.log('Not found')
    }
}

let input = '3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry'

processData(input)