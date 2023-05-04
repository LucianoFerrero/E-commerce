import { useEffect, useState } from "react"
import { Item_Detail } from "../ItemDetail/Card_Product_Detail"
import { useParams } from "react-router-dom"
import { Loading } from "../Loading.jsx/Loading"
import { loadProducts } from "../ProductsShow/loadProducts" 
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from "firebase/firestore"

export const Item_Detail_Container = () => {

    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    const { pId } = useParams()
    console.log(pId)

    // useEffect(()=>{
    //     setDetailProducts(products.find((product) => product.Id == pId))
    //     loadProducts()
    //     .finally( () => setIsLoAding(false))
    // }, [pId])

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos', pId)

        const queryCollectionFiltered = query(
            queryCollection,
            where('id', '===', pId)
        ) 

        getDocs(queryCollectionFiltered)
            .then(res => setProducto( { id: res.id, ...res.data() } ))
            .catch( error => console.log(error) )
            .finally(() => setIsLoading(false))
    }, [])

    console.log(producto)

    if(!producto){
        <Loading/>
    }

    return(
        <> 
            {
                isLoading ?
                    <Loading/>
                : 
                    <div className="w-full h-full flex justify-center">
                        <Item_Detail products={producto}/>
                    </div>
            }
        </>
        
    )

}