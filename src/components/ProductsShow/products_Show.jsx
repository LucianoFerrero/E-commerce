import { Result } from 'postcss'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { loadProducts } from './loadProducts'
import { Products_Map } from './Products_Map'
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom'
import { Loading } from '../Loading.jsx/Loading'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"



export const Products_Show = ({encabezado}) =>{
    
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const {category} = useParams()
    
    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos')

        if(!category){
            getDocs(queryCollection)
            .then(res => setProductos( res.docs.map(producto => ( {id: producto.id, ...producto.data()} ))))
            .finally(() => setIsLoading(false))
        }else{
            const queryCollectionFiltered = query(
                queryCollection,
                where('Category', '==', category)
            )

            getDocs(queryCollectionFiltered)
                .then(res => setProductos( res.docs.map(producto => ( { id: producto.id, ...producto.data() } ))))
                .finally(() => setIsLoading(false))
        }
    }, [category])

    return(
        <>
            { isLoading ? 
                    <Loading/>
                :
                    <div>
                         <Products_Map data = {productos}/>
                    </div>
            }
        </>

    )
}