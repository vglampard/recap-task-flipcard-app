import Card from  "../card/card.js" 

function CardDisplay({pictureArrayOrder}){
    console.log("picture array order at card:", pictureArrayOrder)
    return(
        <div className="card-background">
            {pictureArrayOrder.map((picture, i)=>{
            return (
                <Card picture={picture} index = {i}
                />
            )
            })}
         </div>
    )
}

export default CardDisplay