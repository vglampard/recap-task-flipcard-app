import ReactCardFlip from "react-card-flip"
import {useState} from "react"
import "./card.css"

export default function Card({picture, pickedArray, setPickedArray}){
const [flipState, setFlipState] = useState(false)

// helper function that flips card to be blank
// function flipCardToBlank(){
//     setFlipState(false);
// }

// function that flips card to image, then flips it back (using flipCardToBlank) after 1.5 seconds
function flipCardToImage(){
    setFlipState(true);
    console.log(picture); // picture here is still an integer!

    // setTimeout(flipCardToBlank, 1500);
}

function checkForMatch(){
    if (pickedArray.length === 2){
    if(pickedArray[0] === pickedArray[1]){
        console.log("it's a match")
    }}
}

// ISSUE: PICTURE is not a number, it's a synthetic base event - ie, 'picture' as an argument is actually just hte event, because handledlip is called as an event handler. 
function handleFlip(picture){
    flipCardToImage();
    console.log("picture:", picture) // by HERE, picture is a synthetic base event!!
    setPickedArray([...pickedArray, picture])
    checkForMatch();
    console.log("pickedArray:", pickedArray)
}

// return a flippable card - on one side is a button that allows users to flip it, on the other is an image coditionally rendered according to which number this card corresponde with in the shuffled array

    return (
<ReactCardFlip isFlipped={flipState} flipDirection="vertical">
            <div className = "image-back">
              <button onClick={handleFlip}> ? </button> 
            </div>

            <div>
            <div className="picture-card">
        {picture === 1 && (
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw79BfqIdikFd0RMlM4r5Mx_-IjKatafyw_whW7PuDDnoYzZNs8qlVBPEFuZd0Mi31kqg&usqp=CAU" alt = "yellow fish" className = "image-front"/>
            ) }
        
        {picture ===2 && (
               <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIoJgQASgJVqZVcj0NjAA9PfQ4E77TxB7el2iQlyx1c2ZexDfS6lAql1RxNwQYpP2njiM&usqp=CAU" alt = "gold fish" className = "image-front"/>
        )}
        {picture === 3 && (
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqL0OBgozxih6B142cn0lah7gYphctO45BHnGp3Yxed47b21_EtvHg03F8WOTqC0MNW6M&usqp=CAU" alt = "blue fish" className = "image-front"/>
            ) }
        {picture === 4 && (
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbAKFCjleMXjQP9niUn3rkr5kNH-T-3fS6Ys1irZ9I9HmDq6g18dq4Fp4FdGyjBwGYE4&usqp=CAU" alt = "red fish" className = "image-front"/>
            ) }

        </div>
            </div>
          </ReactCardFlip>
        
        )
        
}

