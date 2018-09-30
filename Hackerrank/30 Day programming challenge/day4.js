class Person{
    constructor(initialAge){
        if(initialAge < 0) {
            console.log('Age is not valid, setting age to 0..');
            this.Age = 0;
        }
        else this.Age = initialAge;
    }

    amIOld(){
        if(this.Age < 13) {console.log('You are young..')}
        else if(this.Age < 18) {console.log('You are a teenager..')}
        else {console.log('You are old..')}
    }

    yearPasses(){
        this.Age++
    }
}

let age = 14;
let p = new Person(age);

p.amIOld();
p.yearPasses();
console.log(p.Age)