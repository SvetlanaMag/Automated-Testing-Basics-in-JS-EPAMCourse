//- Create a car object, add a color property to it with the value equals 'black'
let car = new Object();
car.color = 'black';

console.log(car)

//- Change the color property of the car object to 'green'
car.color = 'green';

console.log(car)

//- Add the power property to the car object, which is a function and displays the engine power to the console
function engPower (enginePower){
    console.log(enginePower)
}
car.power = engPower

console.log(car)

/*- Pears and apples are accepted to the warehouse, write a function that returns the result of adding 
the number of accepted pears and apples*/
function addFruits(pears, apples){
    return pears + apples
}

console.log(addFruits(100,235))

/*- Your name is saved in the payment terminal, write a function to define the name in the terminal 
(if you entered your name, then hello + name, if not, then there is no such name)*/
function sayHello(name){
    if(name){
        return `Hello ${name}`
    } else {
        return 'There is no such name'
    }
}

console.log(sayHello('Sveta'))
console.log(sayHello())

//- Write a function for calculating the type of argument and type output to the console
function calcType(arg){
    return typeof(arg)
}

console.log(calcType('script'))

//- Write a function that determines whether a number is prime or not
function isPrime(num){
    if(num > 1) {
        for (let i = 2; i < num; i++){
            if(num % i == 0) return `${num} is not prime`
        }
    } return `${num} is prime`
}

console.log(isPrime(5))
