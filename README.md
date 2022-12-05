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
How to set timeout on card flip: add helper function that reverse the flip, and add it (with a timeout) to the flipCard function. This will also separate the two flip funtions, so that I can use the 'flip back' function conditionally based o whether the cards match

// CREATE scoreDisplay COMPONENT THAT WILL UPDATE WITH SCORE WHEN THERE'S A MATCH

// ADD FUNCTIONALITY SO THAT CODE RECOGNISES WHEN TWO CONSECUTIVE CARD FLIPS 'MATCH'
  - set 'picked' state in app: every button has an 'add this card's number to the picked state array' functionality. 
  - declare 'ismatched' state in app
  - have a helper function that runs when there are two items in the array. If they match, it runs a function that switches them to a different colour (or something distinctive) and clears the array; if they do NOT match, it runs the flipCardBack function and clears the array.  
  - have a helper function that looks at the 'picked' 

// ADD CONDITIONAL SO THAT THEY TURN BACK OVER ONLY IF THEY DON'T MATCH 
