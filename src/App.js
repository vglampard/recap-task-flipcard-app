import './App.css';
import Button from "./components/button/button.js"
import {useState} from "react"
import CardDisplay from './components/cardDisplay/cardDisplay';

function App() {
  
  const [pictureArrayOrder, setPictureArrayOrder] = useState([1, 2, 3, 4, 1, 2, 3, 4])

  function handleClick(){
    let shuffledNumbers = pictureArrayOrder.sort(function () {
      return Math.random() - 0.5;
    });
    setPictureArrayOrder([...shuffledNumbers])
    console.log("new shuffle state:", pictureArrayOrder)
  }
  
// function handleClick(){
//   const shuffledArray = shuffleArray(pictureArrayOrder)
//   setPictureArrayOrder(shuffledArray)
//   console.log("new shuffle state:", pictureArrayOrder)
// }

  return (
    <div className="App">
      <Button handleClick={handleClick}/>
      <CardDisplay pictureArrayOrder={pictureArrayOrder}/>
    </div>
  );
}

export default App;


