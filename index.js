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
let s; let us; let r; let count; let i;
let string;
i = 0;
count = 0;
print('What do you want to say to Grandma!!');
while (i === 0) {
  s = prompt();
  us = isUppercase(s);

  if (s === 'BYE') {
    count += 1;
  }
  if (count === 3) {
    i = 1;
    break;
  }

  if (us) {
    r = getRandomValue(30, 50);
    if (count < 3) {
      string = `NO, NOT SINCE 19${r}`;
      print(string);
    }
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
}
