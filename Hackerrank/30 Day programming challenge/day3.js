const N = 4;

if((N%2) !== 0){
    console.log('Weird')
}
else if((N%2)== 0 && N<6 && N>1){
    console.log('Not Weird')
}
else if((N%2)== 0 && N<21 && N>5){
    console.log('Weird')
}
else if((N%2) == 0 && N>20){
    console.log('Not Weird')
}
