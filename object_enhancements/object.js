//Same keys and values

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}


//Computed Property names

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}


//Objects Methods

const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + "says bye!";
    }
}


//Create animal function

const c = createAnimal("cat", "meow","Meooooww!")
c.meow()

const m = createAnimal("mouse", "squeak", "Squeeeeaaaak!")
m.squeak()

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}