//1. Given an array consisting of movie names, iterate over the array with the output of the names 
//of each movie to the console
let arrFilm = ['The Matrix', 'A Space Odyssey', 'The Godfather', 'Raiders of the Lost Ark', 'Seven Samurai'];
for (let i = 0; i < arrFilm.length; i++) {
    console.log(arrFilm[i])
}

//2. Given an array of car manufacturers, convert the array to a string and back to an array
let arrCar = ['Stellantis', 'SAIC Motor', 'BMW Group', 'Honda Motor', 'General Motors', 'Ford Motor'];

let strCar = arrCar.join('; ')
console.log(strCar)

let newArr = strCar.split('; ')
console.log(newArr)

//3. Given an array of the names of your friends, add the words hello to each element of the array
let arrName = ['Tom', 'John', 'Anna', 'July', 'Sofy'];

let arrHello = arrName.map((el) => `hello ${el}`);
console.log(arrHello);

//4. Convert numeric array to Boolean
let arrNum = [1, 2, 3, 4, 5];

console.log(arrNum.every((el) => typeof(el) === 'number'));

//5. Sort the array [1,6,7,8,3,4,5,6] in descending order
let arr1 = [1,6,7,8,3,4,5,6];

arr1.sort((a,b) => b - a);
console.log(arr1);

//6. Filter array [1,6,7,8,3,4,5,6] by value> 3
let arr2 = [1,6,7,8,3,4,5,6];

let result = arr2.filter((value) => value > 3);
console.log(result);

//7. Write a function that takes two parameters - an array and a number and outputs the index of an array 
//element equal to a number
function findIndex(arr, num){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == num) 
        return i
    }
}
console.log(findIndex([1, 2, 5, 4, 5, 3], 3))

//8. Implement a loop that will print the number 'a' until it is less than 10
let a = 1;
while (a < 10) {
    console.log(a);
    a++;
}

//10. Implement a loop that prints prime numbers to the console
let num = 20
nextPrime:
  for (let i = 2; i < num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i, "- is prime"); 
  }

//11. Implement a loop that prints odd numbers to the console
let n = 30;
for (let i = 1; i <= n; i++){
    if (i % 2 == 0) {
        console.log(i)
    }
}
