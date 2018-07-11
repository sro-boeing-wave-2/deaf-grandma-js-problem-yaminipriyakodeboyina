/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
let s;
let count = 0;
const r = 'NO, NOT SINCE 19';
print('What do you want to say to Grandma!!');
while (true) {
  s = prompt();

  if (s === 'BYE') {
    count += 1;
  }
  if (count === 3) {
    break;
  }

  if (isUppercase(s)) {
    if (count < 3) {
      print(r + getRandomValue(30, 50));
    }
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
}
