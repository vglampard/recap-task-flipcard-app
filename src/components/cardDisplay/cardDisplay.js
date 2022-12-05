import Card from  "../card/card.js" 

function CardDisplay({pictureArrayOrder, pickedArray, setPickedArray}){
    console.log("picture array order at card:", pictureArrayOrder)
    return(
        <div className="card-background">
            {pictureArrayOrder.map((picture, i)=>{
            return (
                <Card picture={picture} pickedArray={pickedArray} setPickedArray = {setPickedArray}
                />
            )
            })}
         </div>
    )
}

export default CardDisplay