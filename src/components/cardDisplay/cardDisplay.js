import Card from  "../card/card.js" 

function CardDisplay({pictureArrayOrder}){
    console.log("pciture array order at card:", pictureArrayOrder)
    return(
        <div className="card-background">
            {pictureArrayOrder.map((picture)=>{
            return (
                <Card picture={picture}
                />
            )
            })}
         </div>
    )
}

export default CardDisplay