import {GrCart} from 'react-icons/gr'
import { CartContext } from '../../Contexts/CartContext'
import { useContext } from 'react';

export const Shopping_Cart = (Products_count) => {

    const { totalQuantity } = useContext(CartContext);

    return(

        <div className='lex justify-between'>
            <nav className=''>
                <ul className='list-none'>
                    <li className='float-left '><GrCart className='w-7 h-7'/></li>
                    <li className='float-left mr-10 '>{totalQuantity()}</li>
                </ul>
            </nav>
        </div>

    )
}