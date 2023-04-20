import { useState } from "react"

export const Quantity_Button = ({stock, onAdd}) => {

    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(

        <div>
            <div className="flex text-black items-center bg-blue-300 rounded">
                <h2 className="text-2xl mr-4">Cantidad: </h2>
                <button className="mr-4 bg-yellow-300 text-2xl" onClick={decrement}>-</button>
                <h4 className="text-2xl">{quantity}</h4>
                <button className="ml-4 bg-yellow-300 text-2xl" onClick={increment}>+</button>
            </div>
        </div>

    )
}