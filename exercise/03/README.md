# Part 3

Teaching module:

- Functions
  - Return values (data type or void)
  - Using normal function `function x()`
  - Using arrow function `() => {}`
- Control flow: loops (while and for)

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

This exercise is somewhat similar to exercise 2, but you are provided number `val1` and `val2` on your function `printAllIntegers`. Using a loop, print every integers between val1 and val2 (inclusive). Print it so that val2 will be the last printed number.

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
