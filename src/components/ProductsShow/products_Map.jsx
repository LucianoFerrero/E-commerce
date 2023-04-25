import { Buy_Button } from "../BuyButton/BuyButton"
import { Link } from "react-router-dom"

export const Products_Map = ({data}) => {

    return(

        <div className="flex flex-wrap justify-center items-center">
            {
                data.map(( {Id, Category, Name, Size, Price, Brand, Stock, Picture }) => {
                    return(
                        <div className="m-5 hover:-translate-y-5 transition-all">
                            

                            <div class="w-72 bg-slate-100  shadow-2xl shadow-ice">
                                <Link to={`/products/detail/${Id}`}>
                                    <img className="p-2" src={Picture[0]}/>
                                </Link>
                                <div class="px-5 pb-5">
                                    <a href="#">
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">{Name}</h5>
                                    </a>
                                    <div class="flex items-center mt-2.5 mb-5 justifiy-between text-black">
                                        <nav className="list-none">
                                            <li>Talles: {Size}</li>
                                            <li>Marca: {Brand}</li>
                                            <li>Categoria: {Category}</li>
                                            <li>Stock: {Stock}</li>
                                        </nav>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-3xl font-bold text-gray-900 dark:text-black">${Price}</span>
                                        <Buy_Button/>
                                    </div>
                                </div>
                            </div>


                        </div>
                    )
                }
    )
            }   
        </div>

    )
} 
