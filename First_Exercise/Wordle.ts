/*
 *  Wordle.ts
 *  Project: First Exercise
 *
 *  Author: Seth Gage
 *  Created on: Jan 19, 2023
 */

function getWord(attemptedWord: string, secretWord: string): void {
  for (let i = 0; i < secretWord.length; i += 1) {
    const letter = attemptedWord.charAt(i);
    if (attemptedWord.charAt(i) === secretWord.charAt(i)) {
      console.log('c');
    } else if (secretWord.includes(letter)) {
      console.log('p');
    } else {
      console.log('a');
    }
  }
}

const secretWord = 'spoke';
const attemptedWord = 'start';
const result = getWord(attemptedWord, secretWord);
console.log(result);
