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