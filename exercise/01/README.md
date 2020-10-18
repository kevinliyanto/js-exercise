# Part 1

Teaching module:

- Printing with `console.log` and `process.stdout.write`
- Declaring variables (`let` / `const`)
- Basic data type: string, number, and boolean
- Control flow: choice / if-else statement

## Exercise 0: Print to stdout using console.log

Make a file called `hello.js`, and put:

```js
console.log("Hello world");
```

Run it on your shell

```sh
$ node hello.js
```

## Exercise 1: leap.js

Check if input (`rNumber`) is a leap year
If it is a leap year, print **Leap year**, else **Not a leap year**

```
$ node leap.js
Type a year: 2017
Not a leap year
$ node leap.js
Type a year: 2020
Leap year
```

## Exercise 2: cost.js

You want to buy an ice cream cone, but you have certain amount of money.
If you have enough money, specify how many ice cream cones you can get. Otherwise, say "I'm broke".

```
$ node cost.js
Price per cone: 2
Money: 5
I can buy 2 ice cream cones
$ node cost.js
Price per cone: 4
Money: 2
I'm broke
```

### Challenge

If price or money is invalid (less than or equal to 0, or `NaN`), say "Invalid input" and exit the program.

```
$ node cost.js
Price per cone: I love typescript
Invalid input
```

If you can buy ice cream cones, you should also print out the remainder (left over) of your transaction

```
$ node cost.js
Price per cone: 1.5
Money: 4.8
I can buy 3 ice cream cones with 0.3 dollars left over.
```

<details>
<summary>Hints</summary>

> `isNaN(x)` is a function that takes a number and checks whether it is not a number (`NaN`)
> Use `process.exit(status)` to exit a Node.JS program. `status` is a number.

</details>

## Exercise 3: lteq.js

Check if your input (as a float or integer number) is less than or equal to the nearest ceiling number. If it is an integer, print `Equal to <number>`. Otherwise, print `Less than <ceiling number>`

```
$ node lteq.js
Insert a number: 5.1
Less than 6
$ node lteq.js
Insert a number: 4
Equal to 4
$ node lteq.js
Insert a number: -4.9
Less than -4
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
