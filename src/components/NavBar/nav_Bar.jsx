import {HiUserGroup} from 'react-icons/hi' 
import {HiUser} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Ice from '../../assets/Ice.png'
import { Shopping_Cart } from '../ShoppingCart/shopping_Cart'
export const Nav_Bar = () => {

    return(
		<div className="bg-white font-serif block flex justify-between p-4 shadow-lg shadow-ice">
				<div className='flex items-center'>
					<img className='rounded-full w-16 hover:shadow-xl' src={Ice}/>
					<p className='justify-start ml-5 text-3xl'>Ice Drip</p>
				</div>
			
			<nav className="w-1/2 flex justify-center items-center">
				<ul className="list-none">
					<li className="float-left w-[150px] hover:-translate-y-3 transition-all flex flex-col text-center hover:text-[#73BFFE] overline">
					<Link to='/products/detail'>
						Zapas
					</Link>
					</li>
					<li className="float-left w-[150px] hover:-translate-y-3 transition-all flex flex-col text-center hover:text-[#73BFFE] overline">
						Pilchas
					</li>
					<li className="float-left w-[150px] hover:-translate-y-3 transition-all flex flex-col text-center hover:text-[#73BFFE] overline">
						Accesorios
					</li>
				</ul>
			</nav>
			<div className='justify-between flex justify-center items-center'>
				<Shopping_Cart />
				<button className='p-2 text-black hover:text-white bg-[#73BFFE] border-2 border-black rounded-2xl mr-2'>
					Iniciar Sesion
				</button>
				<button className='p-2 text-black hover:text-white bg-[#73BFFE] border-2 border-black rounded-2xl rounded-xl'>
					Registrate
				</button>
			</div>
		</div>

    )
}