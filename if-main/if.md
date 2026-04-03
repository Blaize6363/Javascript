## Write function which returns true if the given number is positive (greater than 0) and false otherwise.

```javascript
function isPositive(num) {
  // The _____ is meant to be "fill in the blank"
  // Look at isZero and compare; what makes sense here?

  return _____;
}
```

---

## Implement a function `isLandscape` that can detect whether an image is landscape.
The function should take two parameters: the width and height of an image. 

If width is greater than height, then the image is landscape and function return true. Otherwise - if the height is greater than the width - it returns false, then the image is portrait.

Store image parameters comparision result into boolean variable, then use boolean variable in `if` statement.

---

## Write a JavaScript function `compareNumbers` that accept two integers and display the larger. Use conditional statement `if` and conditional (ternary) operator `?`.

---

## Write a JavaScript function `specifySign` to find the sign of product of three numbers. Display an alert box with the specified sign. What if product is 0 ?

- Example:
  - specifySign(3, -7, 2) --> The product sign is -(minus)
  - specifySign(10, 5, 4) --> The product sign is +(plus)

---

## Write a JavaScript funcion `checkIsArmstrong` which takes a 3 digits number and returns is it armstrong number or no.

Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.

For example, 371 is an Armstrong number since `3**3 + 7**3 + 1**3 = 371`.

- Examples:
  - checkIsArmstrong(153) --> true
  - isMultipleOf(412) --> false

---

## Given two integers, n and d, write function `isMultipleOf` which returns true if n is a multiple of d and false otherwise.

n is a multiple of d means that d divides n without remainder.

```javascript
function isMultipleOf(n, d) {
  // This is your job. :)
  // Consider handling two cases separately:
  //   1. When d === 0
  //   2. When d !== 0
}
```

- Examples:
  - isMultipleOf(3, 15) --> true
  - isMultipleOf(2, 7) --> false
  - isMultipleOf(2, 0) -->false

---

## Write a JavaScript function `sortNumbers` with conditional statement to sort three numbers descending. Display an alert box to show the result.

- Example:
  - sortNumbers(0, -1, 4) --> 4, 0, -1.

---

## Given three numbers, write function `isValidTriangle` which returns true is a triangle exists with those three numbers as side lengths, and false otherwise.

The order of the function arguments should not matter.

- Examples:
  - console.log(isValidTriangle(3, 4, 5) --> true);
  - console.log(isValidTriangle(3, 5, 4) --> true);
  - console.log(isValidTriangle(4, 3, 5) --> true);
  - console.log(isValidTriangle(4, 5, 3) --> true);
  - console.log(isValidTriangle(5, 3, 4) --> true);
  - console.log(isValidTriangle(5, 4, 3) --> true);

---

## Write the `favoriteNumber` function. This function should:

- Take two arguments, the first is the favorite number and the second is a guess at what the favorite number is
- This function should return:
  - "Too high" if `guess` is greater than `fav`
  - "Too low" if `guess` is less than `fav`
  - "You got it!" if `guess` is equal to `fav`

---

## John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Write function which calculates the average score for each team. 

2. And a function that decides which team wins in average (highest average score), and prints the winner to the console. 
Also include the average score in the output.

3. Then change the scores to show different winners. 
Don't forget to take into account there might be a draw 
(the same average score).

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
Like before, log the average winner to the console. 
HINT: you will need the && operator to take the decision. 

5. Like before, change the scores to generate different winners, keeping 
in mind there might be draws.

---

## Wrivaluete the `checkLock` function. This function should:

- have four arguments that are all numbers
- return "correct" if the four numbers are a valid combination
- return "incorrect" if the 4 numbers aren't a valid combination
- a combination is valid if:
  - the first number is a 3, 5, or 7
  - the second number is 2
- the third number is between 5 and 100. 5 and 100 are both valid numbers
- the fourth number is less than 9 or greater than 20. 9 and 20 both invalid numbers

For example:

```javascript
checkLock(5, 2, 45, 1); // returns "correct"
checkLock(1, 2, 45, 1); // returns "incorrect" because the first number isn't a 3, 5, or 7"
checkLock(5, 2, 45, 10); // returns "inc'orrect" because the fourth number is between 9 and 20
```

---

## Write the `canIGet` function. This function should:

- take two arguments:
  - 'item' should represent what the user wants to buy
  - 'money' should represent how many dollars a user has
  - return 'true' if a user can afford a given item according to the price chart below, false otherwise:
    - 'MacBook Air' - $999
    - 'MacBook Pro' - $1299
    - 'Mac Pro' - $2499
    - 'Apple Sticker' - $1
  - return 'false' if the 'item' is not in the above list apple products

For example:

```javascript
canIGet(`MacBook Air`, 100); // returns false
```

---

## Write a function `tipAmount` that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip.

- Based on:

  - good --> 20%
  - fair --> 15%
  - poor --> 10%

- Examples:
  - tipAmount(100, `good`) --> 20
  - tipAmount(40, `fair`) --> 6

---

## Write a function `totalAmount` that takes the same arguments as `tipAmount` except it returns the total as the tip amount plus the bill amount.

- Hint: this function may use "tipAmount" internally

- Examples:
  - totalAmount(100, `good`) --> 120
  - totalAmount(40, `fair`) --> 46

---

## Write a function `splitAmount` that takes a bill amount, the level of service, and the number of people to split the bill between. It should return the final amount for each person.

- Examples:
  - splitAmount(100, `good`, 5) --> 24
  - splitAmount(40, `fair`, 2) --> 23

---

## Write two functions: "isEven" and "isOdd" that take a number argument and return true or false if the number is even or odd, respectively.

The functions should return "false" if the number passed in is not an integer.

- Examples:
  - isEven(100) --> true
  - isEven(1) --> false
  - isEven(-2) --> true
  - isEven('banana') --> false
  - isOdd(5) --> true
  - isOdd('7') --> false
  - isOdd(3.14) --> false

---

## Write a function `rockPaperScissors` which takes the throw of player 1 and the throw of player 2.

A throw can have the values of 'rock', 'paper', or 'scissors'.
It should return the winner: 'player 1', 'player 2', or 'draw'

- Examples:
  - rockPaperScissors('rock', 'scissors') --> 'player 1'
  - rockPaperScissors('rock', 'paper') --> 'player 2'
  - rockPaperScissors - daysInMonthByNumber(1); --> 31
    -('paper', 'paper') --> 'draw'

---

## Write function `letterGrade` wich takes a numerical grade from 0 to 100, and returns a letter grade.

The minus/plus cutoffs are at 2 and 6, respectively. For example,
80-82 is a B-, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.

- Example
  - letterGrade(50); --> 'F'
  - letterGrade(70); --> 'C-'
  - letterGrade(89); --> 'B+'

---

## Given a month (represented as a number between 1 and 12), write function `daysInMonthByNumber` which gives a month number and returns the number of days in that month.

For example, January is an inpt of 1, February is an input of 2, March is an
input of 3, and so on.

Assume February has 29 days (no leap years).

- Example
  - daysInMonthByNumber(1); --> 31
  - daysInMonthByNumber(9); --> 30

```javascript
function daysInMonthByNumber(monthNum) {
  if (!Number.isInteger(monthNum) || monthNum < 1 || monthNum > 12) {
    throw new Error(`Expected a month number from 1-12, received: ${monthNum}`);
  }

  // This is your job. :)
}
```

---
