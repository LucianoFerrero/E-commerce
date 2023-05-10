import { useEffect, useState } from "react"
import { Item_Detail } from "../ItemDetail/Card_Product_Detail"
import { useParams } from "react-router-dom"
import { Loading } from "../Loading.jsx/Loading"
import { loadProducts } from "../ProductsShow/loadProducts" 
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from "firebase/firestore"

export const Item_Detail_Container = () => {

    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    const { pId } = useParams()
    console.log(pId)

    // useEffect(()=>{
    //     setDetailProducts(products.find((product) => product.Id == pId))
    //     loadProducts()
    //     .finally( () => setIsLoAding(false))
    // }, [pId])

    useEffect(() => {
        const getProducto = async() =>{
            const db = getFirestore()
            const queryRef = doc(db, "productos", pId)
            const response = await getDoc(queryRef)
            const newItem = {
                id: response.id,
                ...response.data(),
            };
            console.log(newItem.id)
            setTimeout(() => {
                setItem(newItem)
                setIsLoading(false)
            }, 2000)
        }
        getProducto()
    }, [pId])

    console.log(item)

    if(!item){
        <Loading/>
    }

    return(
        <> 
            {
                isLoading ?
                    <Loading/>
                : 
                    <div className="w-full h-full flex justify-center">
                        <Item_Detail products={item}/>
                    </div>
            }
        </>
        
    )

}