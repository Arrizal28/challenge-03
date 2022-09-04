class Animal {
    constructor(name, age, legs, species, status){
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }

    introduce(){
        return `Hello, my name is ${this.name} and i am ${this.age} years old.`
    }

    introduceFull(){
        return `nama : ${this.name} , umur : ${this.age} , kaki : ${this.legs} , spesies : ${this.species} , status : ${this.status}.`
    }
}

class shark extends Animal{
    constructor(name, age, status){
        super(name, age, 0, 'Shark', status)
    }
}

class cat extends Animal{
    constructor(name, age, status){
        super(name, age, 4, 'cat', status)
    }
}

class dog extends Animal{
    constructor(name, age, status, master){
        super(name, age, 4, 'dog', status)
        this.master = master
    }

    greetMaster(){
        return `Hello ${this.master}`
    }
}

let myShark = new shark('Hiu', 10, 'Berenang')
let myCat = new cat('Kucing', 2, 'Berjalan')
let myDog = new dog('Anjing', 3, 'Berjalan', 'Arrizal')
console.log(myShark.introduceFull())
console.log(myCat.introduceFull())
console.log(myDog.introduceFull())
console.log(myShark.introduce())
console.log(myCat.introduce())
console.log(myDog.introduce())
console.log(myDog.greetMaster())
