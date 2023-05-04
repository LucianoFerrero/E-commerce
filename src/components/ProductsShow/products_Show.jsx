import { Result } from 'postcss'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { loadProducts } from './loadProducts'
import { Products_Map } from './Products_Map'
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom'
import { Loading } from '../Loading.jsx/Loading'
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from "firebase/firestore"



export const Products_Show = ({encabezado}) =>{
    
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const {category} = useParams()

    console.log(category)

    // useEffect(()=> {

    //     if(!category){

    //         loadProducts()
    //         .then( resultado => {
    //             setProducts(resultado)
    //         })

    //         .catch( error => console.log("error") )
    //         .finally( ()=> setIsLoading(false) )
    //     }else{
    //         loadProducts()
    //         .then( resultado => {
    //             setProducts(resultado.filter(products => products.Category === category))
    //         })

    //         .catch( error => console.log("error") )
    //         .finally( ()=> setIsLoading(false) )
    //     }
    // }, [category])

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos')

        if(!category){
            getDocs(queryCollection)
            .then(res => setProductos( res.docs.map(producto => ( {id: producto.id, ...producto.data()} ))))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
        }else{
            const queryCollectionFiltered = query(
                queryCollection,
                where('category', '==', category)
            )

            getDocs(queryCollectionFiltered)
                .then(res => setProductos( res.docs.map(producto => ( { id: producto.id, ...producto.data() } ))))
                .catch( error => console.log(error))
                .finally(() => setIsLoading(false))
        }
    }, [category])

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos')

        getDocs(queryCollection)
        .then(res => setProductos( res.docs.map(producto => ( { id: producto.id, ...producto.data() } ))))
        .catch( error => console.log(error))
        .finally( () => setIsLoading(false))
    }, [])


    
    console.log(productos)
    return(
        // <div className='w-full h-screen'>
        <>
            { isLoading ? 
                    <Loading/>
                :
                    <div>
                         <Products_Map data = {productos}/>
                    </div>
            }
        </>

        // </div>
    )
}