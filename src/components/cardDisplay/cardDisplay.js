import Card from  "../card/card.js" 

function CardDisplay({pictureArrayOrder, pickedArray, setPickedArray}){
    return(
        <div className="card-background">
            {pictureArrayOrder.map((picture, i)=>{
                 // picture here is still an integer!
            return (
                <Card id={i} picture={picture} pickedArray={pickedArray} setPickedArray = {setPickedArray}
                />
            )
            })}
         </div>
    )
}

export default CardDisplay