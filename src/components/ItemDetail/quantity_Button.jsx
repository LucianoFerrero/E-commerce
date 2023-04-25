import { useState } from "react"
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'

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
            <div className="flex text-black items-center">
                <h2 className="text-2xl mr-4 rounded border-2 bg-white border-black">Cantidad: </h2>
                <button className="mr-4 bg-green-300 border-2 rounded border-black text-2xl" onClick={decrement}><FiMinus></FiMinus></button>
                <h4 className="text-2xl">{quantity}</h4>
                <button className="ml-4 bg-green-300 border-2 rounded border-black text-2xl" onClick={increment}><FiPlus></FiPlus></button>
            </div>
        </div>

    )
}