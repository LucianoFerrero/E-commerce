
import { Link, NavLink, useParams } from 'react-router-dom'
import Ice from '../../assets/Ice.png'
import { Shopping_Cart } from '../ShoppingCart/shopping_Cart'
export const Nav_Bar = () => {

    return(
		<div className="bg-white block flex justify-between p-4 shadow-lg shadow-ice">
				<div className='flex items-center'>
					<Link to='/home'>
						<img className='rounded-full w-16 hover:shadow-xl' src={Ice}/>
					</Link>
					<p className='justify-start ml-5 text-3xl'>
						<Link to='/home'>
						    Ice Drip
						</Link>
					</p>
				</div>
			
			<nav className="w-1/2 flex justify-center items-center">
				<ul className="list-none">
					<li className="float-left w-[150px] hover:-translate-y-3 transition-all flex flex-col text-center hover:text-[#73BFFE] overline">
						<NavLink to='/products/category/Zapas'>
							Zapas
						</NavLink>
					</li>
					<li className="float-left w-[150px] hover:-translate-y-3 transition-all flex flex-col text-center hover:text-[#73BFFE] overline">
						<NavLink to='/products/category/Pilchas'>
							Pilchas
						</NavLink>
					</li>
					<li className="float-left w-[150px] hover:-translate-y-3 transition-all flex flex-col text-center hover:text-[#73BFFE] overline">
						<NavLink to='/products/category/Accesorios'>
							Accesorios
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className='justify-between flex justify-center items-center'>
				<Link to='/cart'>
					<Shopping_Cart />
				</Link>
				<Link to='/login'>
				<button className='p-2 text-black hover:text-white bg-[#73BFFE] border-2 border-black rounded-2xl mr-2'>
					Iniciar Sesion
				</button>
				</Link>
			</div>
		</div>

    )
}