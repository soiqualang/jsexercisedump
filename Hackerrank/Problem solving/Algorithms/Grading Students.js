function gradingStudents(grades) {
    let aprox = 0;
    let sub = 0;
    let results = []
    for(let i=0; i<grades.length; i++){
        console.log(i)
        aprox = (Math.floor(grades[i]/5)*5)+5
        sub = aprox - grades[i]
        if(sub < 3) results[i] = aprox
        else results[i] = grades[i]
    }
    return results
}

let grades = [73,67,38,33];

let result = gradingStudents(grades);

console.log(result.join("\n") + "\n");