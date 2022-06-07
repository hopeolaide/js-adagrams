import {letterPool, scoreChart} from './letters'

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterOptions = []; 
  
  for (const [letter, frequency] of Object.entries(letterPool)) {
    for (let i = 0; i < frequency; i++) {
      letterOptions.push(letter);
    }
  }
  
  let userLetters = [];  //This was origianlly done with a deepcopy method in python 
  while (userLetters.length < 10) {
    const letter_index = Math.floor(Math.random() * letterOptions.length);
    const letter_draw = letterOptions[letter_index];
    letterOptions.splice(letter_index, 1);
    userLetters.push(letter_draw);
  }
              
  return userLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
