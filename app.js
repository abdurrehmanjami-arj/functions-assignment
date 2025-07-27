// Question No 1. addTwoNumbers
// Write a function that takes two numbers and returns their sum.

// function addition(num1, num2) {
//   return num1 + num2;
// }
// var result = addition(10, 10);
// console.log(result);

// Question No 2. subtractNumbers
// Create a function that takes two numbers and returns the result of the first number
// minus the second.

// function subtraction(num1, num2) {
//   return num1 - num2;
// }
// var result = subtraction(20, 15);
// console.log(result);

// Question No 3. multiplyNumbers
// Write a function that multiplies two numbers and returns the result.

// function multiplication(num1, num2) {
//   return num1 * num2;
// }
// var result = multiplication(5, 5);
// console.log(result);

// Question No divideNumbers
// Create a function that takes two numbers and returns the result of dividing the first by
// the second.

// function division(num1, num2) {
//   return num1 / num2;
// }
// var result = division(8, 2);
// console.log(result);

// Question No 5. getRemainder
// Write a function that takes two numbers and returns the remainder when the first
// number is divided by the second.

// function getRemainder(num1, num2) {
//   return num1 % num2;
// }
// var result = getRemainder(5, 2);
// console.log(result);

// Question No 6 isPositive
// Write a function that checks if a number is positive. If it is, return "Positive",
// otherwise return "Not Positive".

// function isPositive(num) {
//   if (num > 0) {
//     return "Positive";
//   } else {
//     return "Not Positive";
//   }
// }
// var result = isPositive(-5);
// console.log(result);

//Question No 7. isNegative
// Create a function that checks if a number is negative. If it is, return "Negative", else
// return "Not Negative".

// function isNegative(num) {
//   if (num < 0) {
//     return "Negative";
//   } else {
//     return "Not Negative";
//   }
// }
// var result = isNegative(-5);
// console.log(result);

// Question no 8. checkEven
// Write a function that takes a number and returns "Even" if the number is even,
// otherwise "Odd".

// function checkEven(num) {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// var result = checkEven(4);
// console.log(result);

// QUestion No 9. isEqual
// Write a function that takes two numbers and returns "Equal" if they are the same,
// otherwise "Not Equal".

// function isEqual(num1, num2) {
//   if (num1 === num2) {
//     return "Equal";
//   } else {
//     return "Not Equal";
//   }
// }
// var result = isEqual(7, 6);
// console.log(result);

// Question No 10. compareNumbers
// Create a function that returns "Greater" if the first number is greater than the second,
// else return "Smaller".

// function compareNumbers(num1, num2) {
//   if (num1 > num2) {
//     return "Greater";
//   } else {
//     return "Smaller";
//   }
// }
// var result = compareNumbers(8, 8);
// console.log(result);

// Question No 11. getFullName
// Write a function that takes a first name and last name, and returns the full name.

// function getFullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
// var fullName = getFullName("abdur", "rehman");
// console.log(fullName);

// Question No 12. getGrade
// Create a function that takes a number (0–100) and returns:
// ● "Pass" if the score is 40 or more
// ● "Fail" if it is less than 40

// function getGrade (num) {
//     if(num >= 40) {
//         return "Pass"
//     } else {
//         return "Fail"
//     }
// }
// var result = getGrade(39)
// console.log(result);

// Question No 13. isTeenager
// Write a function that takes an age and returns "Teenager" if the age is between 13
// and 19, otherwise return "Not a Teenager".

// function isTeenager(age) {
//   if (age >= 13 && age <= 19) {
//     return "Teenager";
//   } else {
//     return "Not a Teenager";
//   }
// }
// var result = isTeenager(20);
// console.log(result);

// Question No 14. greetUser
// Write a function that takes a name and returns a greeting like "Hello, Ahmed!".

// function greetUser(name) {
//   return `Hello, ${name}`;
// }
// var username = greetUser("abid");
// console.log(username);

// Question No 15. isEligibleToVote
// Create a function that takes age and returns "Eligible" if age is 18 or above,
// otherwise "Not Eligible".

// function isEligibleToVote(age) {
//   if (age > 18) {
//     return "Eligible";
//   } else {
//     return "Not Eligible";
//   }
// }
// var result = isEligibleToVote(25);
// console.log(result);

// Question No 16. findAbsoluteValue
// Write a function that returns the absolute value of a number (no Math.abs, use if-else
// only).

// function absoluteValue(num) {
//   if (num < 0) {
//     return num * -1;
//   } else {
//     return num;
//   }
// }
// let result = absoluteValue(-6);
// console.log(result);

// Question No 17. checkTemperature
// Write a function that takes a temperature and returns:
// ● "Hot" if temperature is above 30
// ● "Cold" if below 10
// ● "Normal" otherwise

// function checkTemperature(temp) {
//   if (temp > 30) {
//     return "Hot";
//   } else if (temp < 10) {
//     return "Cold";
//   } else {
//     return "Normal";
//   }
// }
// let result = checkTemperature(32);
// console.log(result);

// Question No 18. getTriangleType
// Create a function that takes 3 sides and returns:
// ● "Equilateral" if all are equal
// ● "Isosceles" if any two are equal
// ● "Scalene" if all are different

// function getTriangleType(num1, num2, num3) {
//   if (num1 === num2 && num2 === num3) {
//     return "Equilateral";
//   } else if (num1 === num2 || num1 === num3 || num2 === num3) {
//     return "Isosceles";
//   } else {
//     return "Scalene";
//   }
// }
// let result = getTriangleType(21, 10, 20);
// console.log(result);

// Question No 19. calculateDiscountedPrice
// Write a function that takes a price and discount percentage, and returns the discounted
// price.

// function calculateDiscount(price, discountPercentage) {
//   let discountAmount = (price * discountPercentage) / 100;
//   let finalPrice = price - discountAmount;
//   return finalPrice;
// }
// let result = calculateDiscount(105, 10);
// console.log(result);

// Question No 20. isPasswordValid
// Write a function that takes a password and checks if its length is 8 characters or more.
// Return "Valid Password" or "Too Short".

// function isPasswordValid(password) {
//   if (password.length >= 8) {
//     return "Valid Password";
//   } else {
//     return "Too Short";
//   }
// }
// let result = isPasswordValid("hellwwww");
// console.log(result);