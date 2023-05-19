import { useState } from "react"
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'
import { useCounter } from "../../Hooks/useCounter"
import { Item_Detail } from "./card_Product_Detail"

export const Quantity_Button = ({initial=1, stock=8, onAdd}) => {

    // const [quantity, setQuantity] = useState(1)

    const { counter, sumHandle, restHandle } = useCounter(initial, 1, stock)

    // const increment = () => {
    //     if(quantity < stock) {
    //         setQuantity(quantity+1)
    //     }
    // }

    // const decrement = () => {
    //     if(quantity > 1){
    //         setQuantity(quantity-1)
    //     }
    // }

    return(

        <div>
            <div className="flex text-black items-center">
                <h2 className="text-2xl mr-4 rounded border-2 bg-white border-black">Cantidad: </h2>
                <button className="mr-4 bg-green-300 border-2 rounded border-black text-2xl" onClick={restHandle}><FiMinus></FiMinus></button>
                <h4 className="text-2xl">{counter}</h4>
                <button className="ml-4 bg-green-300 border-2 rounded border-black text-2xl" onClick={sumHandle}><FiPlus></FiPlus></button>
                <button onClick={() => {onAdd(counter)} } href="#" class="mt-4 text-black bg-ice hover:bg-ice border-2 border-black font-medium  text-sm px-5 py-2.5 text-center dark:hover:ice hover:text-white dark:focus:ice">Agregar</button>
            </div>
        </div>

    )
}