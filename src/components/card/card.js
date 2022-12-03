export default function Card({picture}){

    return (
        <div className="picture-card">
        {picture === 1 && (
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw79BfqIdikFd0RMlM4r5Mx_-IjKatafyw_whW7PuDDnoYzZNs8qlVBPEFuZd0Mi31kqg&usqp=CAU" alt = "yellow fish" />
            ) }
        
        {picture ===2 && (
               <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIoJgQASgJVqZVcj0NjAA9PfQ4E77TxB7el2iQlyx1c2ZexDfS6lAql1RxNwQYpP2njiM&usqp=CAU" alt = "gold fish" />
        )}
        {picture === 3 && (
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqL0OBgozxih6B142cn0lah7gYphctO45BHnGp3Yxed47b21_EtvHg03F8WOTqC0MNW6M&usqp=CAU" alt = "blue fish" />
            ) }
        {picture === 4 && (
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbAKFCjleMXjQP9niUn3rkr5kNH-T-3fS6Ys1irZ9I9HmDq6g18dq4Fp4FdGyjBwGYE4&usqp=CAU" alt = "red fish" />
            ) }

        </div>
        )
        
    
}