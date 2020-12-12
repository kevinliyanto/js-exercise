# Part 3

Teaching module:

- Functions
  - Return values (data type or void)
  - Using normal function `function x()`
  - Using arrow function `() => {}`
- Control flow: loops (while and for)
- Recursion

## Exercise 1: math.js

Same as part 1 exercise 3, there are three functions called `sum`, `average`, and `multiply` that you need to modify in order to give the correct answer. Do not modify function `main`.

```sh
$ node math.js
First number: 12
Second number: 3
# Your output
Sum: 15
Average: 7.5
Multiply: 36
```

```sh
$ node math.js
First number: 4.2
Second number: 2
# Your output
Sum: 6.2
Average: 3.1
Multiply: 8.4
```

## Exercise 2: decrement.js

You are provided a number `val` on your function `decrement`. Using a loop, print every integers between your input and 0 (inclusive). Assume that your input is positive.

```sh
$ node decrement.js
Input number: 4
4
3
2
1
0
```

# Exercise 3: divisible.js

You are provided a number `val` on your function `divisible`. Using a loop, print every positive integers less than or equal to `val` divisible by 3 and 5. Also, return the greatest common multiple less than or equal to your input number if exists. If it doesn't exist, return `0`.

```
$ node divisible.js
Input number: 30
3
5
6
9
10
12
15
18
20
21
24
25
27
30
Greatest common multiple for input 30: 30
```

```sh
$ node divisible.js
Input number: 7
3
5
# If the function returns 0, it will print out "none"
Greatest common multiple for input 7: none
```

## Exercise 4: integers.js

This exercise is somewhat similar to exercise 2, but you are provided number `val1` and `val2` on your function `printAllIntegers`. Using a loop, print every integers between val1 and val2 (inclusive). Print it so that the integer closest to val2 will be the last printed number.

```sh
$ node integers.js
First number: 23
Second number: 0
23
22
# ...
# and all of those numbers between 22 and 1
# ...
1
0
```

```sh
$ node integers.js
First number: -3.1
Second number: 1.5
-3
-2
-1
0
1
```

```sh
$ node integers.js
First number: 0
Second number: 0
0
```

## Exercise 5: factors.js

Print out every **factors** and **prime factors** of your positive integer input `val` on your function `printFactors` in one line.

```sh
$ node factors.js
Input number: 364
Factors: 1, 2, 4, 7, 13, 14, 26, 28, 56, 91, 182, 364
Prime factors: 2, 7, 13
```

## Exercise 6: rectangle.js

You are provided `printRectangle` function with `width` and `height` property. Using a loop, print a rectangle of `O`. If width/height is not a number or less than 0, don't print anything.

```sh
$ node rectangle.js
Width: 6
Height: 3
OOOOOO
OOOOOO
OOOOOO
```

```sh
$ node rectangle.js
Width: 10
Height: 0
```

## Exercise 7: borderedRectangle.js

Same as exercise 5, you have to put a border with size 1 on your rectangle with character `\*`. If width/height is not a number or less than 0, don't print anything.

```sh
$ node borderedRectangle.js
Width: 6
Height: 3
********
*OOOOOO*
*OOOOOO*
*OOOOOO*
********
```

```sh
$ node borderedRectangle.js
Width: 10
Height: 0
**********
**********
```

```sh
$ node borderedRectangle.js
Width: -5
Height: 322
```

## Exercise 8: (Challenge) diamond.js

Inside your `printDiamond` function, you are given `val` which is an integer where you need to draw that many diamonds inside each other using the character `\` or `/`. There should be a gap between the inner diamond and the covering diamond.

```
$ node diamond.js
Diamond count: 1
/\
\/
```

```
$ node diamond.js
Diamond count: 3
    /\
   /  \
  / /\ \
 / /  \ \
/ / /\ \ \
\ \ \/ / /
 \ \  / /
  \ \/ /
   \  /
    \/
```

## Exercise 9: factorial.js

Factorial of a number `x` in mathematics is denoted by `x!`. It is the product of all positive less than or equal to `x`, mathematically:

```
x! = x * (x-1) * (x-2) * ... * 3 * 2 * 1
```

Inside your `factorial` function, you are given `x` (taken from your input number) in which you have to return factorial of `x`. Assume that x will always be positive.

```
$ node factorial.js
Input number: 1
1
```

```
$ node factorial.js
Input number: 8
362880
```

```
$ node factorial.js
Input number: 90
1.4857159644817607e+138
```

## Exercise 10: fibonacci.js

Fibonacci sequence is formed such that each number is the sum of the two preceding ones starting from 0 and 1, mathematically:

```
f(0) = 0
f(1) = 1
f(x) = f(x-1) + f(x-2)
```

Inside your `fibonacci` function, you are given `x` (taken from your input number) in which you have to return the *x*th fibonacci number.

```
$ node fibonacci.js
Input number: 0
0
```

```
$ node fibonacci.js
Input number: 20
6765
```

```
$ node fibonacci.js
Input number: 20
102334155
```

### Challenge

Your code gets slower when you have to put a larger value. Find out a way to make your code faster (gives you a result in less than a second). You can benchmark your code performance by [looking at `user` field](https://stackoverflow.com/a/556411) when running your code with [`time`](https://man7.org/linux/man-pages/man1/time.1.html).

```
$ time node fibonacci.js
Input number: 102
927372692193079200000

real    0m1.185s
user    0m0.024s # This field is the one you're looking for
sys     0m0.006s
```

```
$ time node fibonacci.js
Input number: 1200
2.7269884455406272e+250

real    0m1.185s
user    0m0.024s
sys     0m0.006s
```

For this challenge, you are allowed to put a code before the main function call.

<details>
<summary>Hints</summary>

> Memoization is a technique to speed up your code by storing previously-calculated result.
>
> `const store = new Map()` gives you a map, a place where you can store key-value pair.
>
> For example, you can store a value by setting a key to a value, like `store.set(0, "something")`.
>
> Then, you can retrieve the string "something" by getting the value `store.get(0)`.
>
> `Map` object will be introduced in part 5 of this exercise.

</details>
