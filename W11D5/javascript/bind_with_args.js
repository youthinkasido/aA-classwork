class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

Function.prototype.myBind = function(ctx) {
    // this = meow // the reciever
    // ctx = object we're binding to 
    // const that = this
    return () => { this.apply(ctx) }
    // ^^ returning the function that invokes the reciever
    // return () => meow.apply(cat);
    // bind makes a specific object (ctx) available to a function
}

// defining myBind as a function on the function protoype
// binding the context to the reciever
// returns new function that is bound
// the purpose of bind is to "this" inside of says cat
// inside says, we want "this" === cat
// this.name

boundMeow = meow.myBind(cat)
boundMeow(3)

Function.prototype.myBind = function(ctx){
    const bindArgs = [].slice.call(arguments, 1) // arguments: {0: cat, 1: other1, 2: other2} => [other1,other2] 
    let that = this;
    return function () { 
        let callArgs = [].slice.call(arguments) // [other3,other4]
        that.apply(ctx,bindArgs.concat(callArgs)) //[other1,other2,other3,other4]
    }
}

Function.prototype.myBind = function(ctx,...bindArgs) {
    let that = this;
    return function (...callArgs) {
        that.apply(ctx,bindArgs.concat(callArgs))
    }
}

let cat = new Cat
cat.name = "marbles"

boundMeow = meow.myBind(cat)
boundMeow(other3,other4)


// available function on the prototype for Function

Function.prototype.myBind = function(ctx,...bindArgs){
    return function(...callArgs) => {
        this.apply(ctx,callArgs.concat(bindArgs))
    }
}


boundBark = bark.myBind(dog,numTimes,volume,person) // bindArgs
boundBark();

boundBark = bark.myBind(dog)
boundBark(numTimes,volume,person) // callArgs

// unboundFunction = says
// boundFunction = says.myBind(cat)
// boundFunction = says
// bound("say hi")


// {
//     this.name = "tilly"
//     this.meow = "purrrr"
// }

// meow() // has no context 

// const meow = function () {
//     console.log(this.meow)
//     // window.meow
//     // global.meow
// }

// let cat = new Cat("tilly")
// const boundMeow = meow.bind(cat)()

// const meow = function () {
//     // this = cat
//     console.log(this.meow)
//     // cat.meow
// }

// boundMeow()


Function.prototype.myBind = function(ctx){

    let that = this;

    return function(){
         that.apply(ctx);
    }
}

cat1 = new Cat('jimmy')

boundSays = says.myBind(cat1);
boundSays();
