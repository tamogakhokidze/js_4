"use strict";

//task 1

// let array = [ 5,25,89,120, 36];
// array.push ('javasctipt', 'python');
// console.log(array);
// array.unshift ('html', 'css');
// console.log(array);
// console.log(array.length);
// array.shift();
// console.log(array);
// array.pop();
// console.log(array);

//task 2

// let array = ['orange', 'banana', 'pear'];

// console.log(array);
// console.log(array.length);
// array.push ('apple', 'pineapple');
// console.log(array);
// array.unshift('watermelon');
// console.log(array);
// console.log(array.length);
// array.splice(2, 0, 'mango');
// console.log(array);
// array.shift();
// console.log(array);
// array.pop();
// console.log(array);
// console.log(array.length);

//task 3
// let array =[1, 2, 3, 4, 5];
// array.splice (3, 0, 'a', 'b', 'c');
// console.log(array);

//task 4
// let arr = [1, 2, 3, 4, 5];
// let arraySum = 0;
// arr.forEach((sum) => {
//   arraySum += sum;
// });
// console.log(arraySum);

//task 5

//  for (let i= 0; i< 100; i++);{
//     console.log(i);
//  }
 


// 5. ციკლის საშუალებით გამოიტანეთ რიცხვების სვეტი 100 დან 1 მდე;



//task 6


// 6. დაწერეთ ფუნქცია, რომელსაც პარამეტრად გადაეცემა ორი რიცხვი
// (ნებისმიერი ჩაწერეთ) და რომელიც შეასრულებს შემდეგ ლოგიკას:
// თუ პირველი რიცხვი მეტია მეორეზე დაიბეჭდოს - num1 is the largest; 
// თუ მეორე რიცხვი მეტია პირველზე - დაიბეჭდოს num2 is the largest;
//  ყვეკა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - error;


function largestFunction (x, y) {
    if (x > y) {
        console.log('num1 is the largest');
    }
    else if ( y > x) {
        console.log('num2 is the largest');
    }
    else {
        error;
    }

}
let result = largestFunction(10, 5);
console.log(result);