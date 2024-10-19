
export default function Book ({book}){
    const {name, price} = book
    return(
        <div>
            <h3>BookS name: {name}</h3>
            <p>price: {price}</p>
        </div>
    )
}