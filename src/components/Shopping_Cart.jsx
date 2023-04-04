import {GrCart} from 'react-icons/gr'

export const Shopping_Cart = (Products_count) => {

    return(

        <div className='lex justify-between'>
            <nav className=''>
                <ul className='list-none'>
                    <li className='float-left '><GrCart className='w-7 h-7'/></li>
                    <li className='float-left mr-10 '>0</li>
                </ul>
            </nav>
        </div>

    )
}