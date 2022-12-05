app renders:
card display
button element

define shuffleArray and pass down as prop to button element

card: 
iterates over pictureOrderArray and creates a picture for each

button:
on click, shuffleArray (set pictureOrderArray)


added react card flip 

shuffling an array:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let shuffledNumbers = numbers.sort(function () {
  return Math.random() - 0.5;
});

STATE: cardOrder LR (setState is shuffle function)

array.map that renders a card for each number in the array 


// ADD TIMEOUT TO CARDS SO THEY FLIP BACK AFTER 1.5 SECONDS
How to set timeout on card flip 

// ADD FUNCTIONALITY SO THAT CODE RECOGNISES WHEN TWO CONSECUTIVE CARD FLIPS 'MATCH'
  - set 'picked' state in app: every button has an 'add this card's number to the picked state array' functionality
  - set 'ismatched' state in app: have a helper function that reviews the 'picked' array and if there are two items in it: if they match, 
  - have a helper function that looks at the 'picked' 

// ADD CONDITIONAL SO THAT THEY TURN BACK OVER ONLY IF THEY DON'T MATCH 
