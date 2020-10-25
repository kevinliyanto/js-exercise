# Part 1

Teaching module:

- Printing with `console.log` and `process.stdout.write`
- Declaring variables (`let` / `const`)
- Basic data type: string, number, and boolean
- Basic operation on strings: combining string
- Basic operations on number: arithmetic

## Exercise 1: Print to stdout using console.log

Make a file called `hello.js`, and put:

```js
console.log("Hello world 1");
process.stdout.write("Hello world 2\n");
process.stdout.write("\n");
```

`console.log` prints out everything that you passed in with a newline to your console / stdout, while `process.stdout.write` prints to stdout as it is. Run your application on your shell.

```sh
$ node hello.js
# Your output (This line won't be shown on your console)
Hello world 1
Hello world 2
```

## Exercise 2: combine.js

NodeJS processes your input into two strings: `s1` and `s2`. Combine them together with a space and print it out in your console

```sh
$ node combine.js
First string: JavaScript
Second string: programming language
# Your output
JavaScript programming language
```

## Exercise 3: math.js

The template code gives you two numbers: `number1` and `number2`. Do math operations between them to give sum, average, and multiplication result like the example below

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
