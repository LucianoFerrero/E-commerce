import { Result } from 'postcss'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { loadProducts } from './loadProducts'
import { Products_Map } from './Products_Map'
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom'


export const Products_Show = ({encabezado}) =>{
    
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {category} = useParams()

    console.log(category)

    useEffect(()=> {

        if(!category){

            loadProducts()
            .then( resultado => {
                setProducts(resultado)
            })

            .catch( error => console.log("error") )
            .finally( ()=> setIsLoading(false) )
        }else{
            loadProducts()
            .then( resultado => {
                setProducts(resultado.filter(products => products.Category === category))
            })

            .catch( error => console.log("error") )
            .finally( ()=> setIsLoading(false) )
        }
    }, [category])

    return(
        <div className='w-full h-screen'>
            { isLoading ? 
                    <h1 className='text-3xl flex justify-center'>Loading....</h1>
                :
                    <div>
                         <Products_Map data = {products}/>
                    </div>
            }

        </div>
    )
}