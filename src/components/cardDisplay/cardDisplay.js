import Card from  "../card/card.js" 

function CardDisplay({pictureArrayOrder, pickedArray, setPickedArray}){
    return(
        <div className="card-background">
            {pictureArrayOrder.map((picture)=>{
                 // picture here is still an integer!
            return (
                <Card picture={picture} pickedArray={pickedArray} setPickedArray = {setPickedArray}
                />
            )
            })}
         </div>
    )
}

export default CardDisplay