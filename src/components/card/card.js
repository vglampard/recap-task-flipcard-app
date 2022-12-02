export default function Card({picture}){
  
    return(
        <div className="picture-card">
        {picture === 1 && (
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7TeyGEqJVHA-b4RJq8-KfLHjMMn0LnENlujzpV2cSvB195xa11zM_Ni7ej4zgl9m47o&usqp=CAU" alt = "smily face" />)
        }
        {picture ===2 && (
            <img src = "https://p1.hiclipart.com/preview/502/942/553/amazing-fishes-png-clipart.jpg"
        )}
        {picture ===3 && (
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw79BfqIdikFd0RMlM4r5Mx_-IjKatafyw_whW7PuDDnoYzZNs8qlVBPEFuZd0Mi31kqg&usqp=CAU"
        )}
        {picture === 4 && (
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwqmXt1--aLSZ2mCCjfXeAEXpGHEbH0AzfFYt2XEBPiJbutnR0gi6e3ULi1IM1eLdSII&usqp=CAU"
        )}
        </div>
        )
        
    
}