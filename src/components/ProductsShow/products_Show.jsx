import { Result } from 'postcss'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { loadProducts } from './loadProducts'
import { Products_Map } from './Products_Map'
import ClipLoader from "react-spinners/ClipLoader";


export const Products_Show = () =>{
    
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {

        loadProducts()
        .then( resultado => {
            setProducts(resultado)
        })

        .catch( error => console.log("error") )
        .finally( ()=> setIsLoading(false) )
    }, [])

    console.log(products)
    return(
        <div className='w-full h-screen'>
            { isLoading ? 
                    <ClipLoader
                    color={'#000000'}
                    size={150}/>
                :
                    <Products_Map data = {products}/>
            }

        </div>
    )
}