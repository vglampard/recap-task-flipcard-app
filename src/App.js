import './App.css';
import Button from "./components/button/button.js"
import Card from "./components/card/card.js"
import {useState} from "react"

function App() {
  
  const [pictureArrayOrder, setPictureArrayOrder] = useState([1, 2, 3, 4])

  let shuffledNumbers

  function shuffleArray(){
    shuffledNumbers = pictureArrayOrder.sort(function () {
      return Math.random() - 0.5;
    });
    return shuffledNumbers
  }
  
function handleClick(){
  console.log("shuffled array:", pictureArrayOrder)
  const shuffledArray = shuffleArray(pictureArrayOrder)
  setPictureArrayOrder(shuffledArray)
  console.log("new shuffle state:", pictureArrayOrder)
}

  return (
    <div className="App">
      <Button handleClick={handleClick}/>
      <Card pictureArrayOrder={pictureArrayOrder}/>
    </div>
  );
}

export default App;


