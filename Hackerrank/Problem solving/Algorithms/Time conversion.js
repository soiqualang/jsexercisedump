function timeConversion(s) {
    let hours = s.slice(0,2)
    let rest = s.slice(3,8)
    let ampm = s.slice(8,10)

    if(ampm == 'AM'){
        if(hours !== '12')  return hours + ':' + rest;
        else return '00:' + rest;
    }
    else if(ampm == 'PM'){
        if(hours !== '12') return ((parseInt(hours,10)+12).toString()) + ':' + rest;
        else return '12:' + rest;
    }
}

let clock = "12:45:54PM"
let result = timeConversion(clock);
console.log(result)