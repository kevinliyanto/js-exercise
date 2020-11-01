# Part 2

This teaching module covers choice control flow

Teaching module:

- Control flow: choice / if-else statement

## Exercise 1: biggest.js

Print out the biggest number between variable `number1`, `number2`, and `number3` using if statement.

```
$ node biggest.js
First number: 7
Second number: 42
Third number: -3
Biggest number is: 42
```

```
$ node biggest.js
First number: -7.3
Second number: -16.9
Third number: -14.7
Biggest number is: -7.3
```

## Exercise 2: leap.js

Check if input (`rNumber`) is a leap year
If it is a leap year, print **Leap year**, else **Not a leap year**

```
$ node leap.js
Type a year: 2017
Not a leap year
```

```
$ node leap.js
Type a year: 2020
Leap year
```

### Challenge

Do not use if statement for this question. Use the logical (`!`, `&&`, `||`, etc) and ternary operator (`a ? b : c`)

## Exercise 3: cost.js

You want to buy an ice cream cone, but you have certain amount of money.
If you have enough money, specify how many ice cream cones you can get. Otherwise, say "I'm broke".

```
$ node cost.js
Price per cone: 2
Money: 5
I can buy 2 ice cream cones
```

```
$ node cost.js
Price per cone: 4
Money: 2
I'm broke
```

### Challenge

If price or money is invalid (less than or equal to 0, or `NaN`), say "Invalid input" and exit the program.

```
$ node cost.js
Price per cone: JavaScript is better than TypeScript
Invalid input
```

If you can buy ice cream cones, you should also print out the remainder (left over) of your transaction. Remainder is rounded to 1 decimal place.

```
$ node cost.js
Price per cone: 1.51
Money: 4.83
I can buy 3 ice cream cones with 0.3 dollars left over
```

<details>
<summary>Hints</summary>

> `isNaN(x)` is a function that takes a number and checks whether it is not a number (`NaN`)

> To round a number to x decimal places, use `number.toFixed(x)`

> Use `process.exit(status)` to exit a Node.JS program. `status` is a number.

</details>

## Exercise 4: lteq.js

Check if your input (as a float or integer number) is less than or equal to the nearest ceiling number. If it is an integer, print `Equal to <number>`. Otherwise, print `Less than <ceiling number>`

```
$ node lteq.js
Insert a number: 5.1
Less than 6
```

```
$ node lteq.js
Insert a number: 4
Equal to 4
```

```
$ node lteq.js
Insert a number: -4.9
Less than -4
```

```
$ node lteq.js
Insert a number: 0
Equal to 0
```

Ceiling of x is defined as

```
ceil(x) = x - (x % 1) + 1
```

<details>
<summary>Hints</summary>

> You can use `Math.ceil(x)` in JavaScript to calculate ceiling of x

</details>
