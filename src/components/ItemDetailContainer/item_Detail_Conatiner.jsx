import { useEffect } from "react"
import { Item_Detial } from "../ItemDetail/Card_Product_Detail"
import { products } from "../../Data/products"
import { useParams } from "react-router-dom"
export const Item_Detail_Container = () => {

    const [productsDetail, setProductsDetail ] = useEffect(products)

    const {itemId} = useParams()

    useEffect(()=>{

    }, [itemId])

    return(
        <div className="w-full h-full flex justify-center">
                <Item_Detial products={productsDetail}/>
        </div>
    )

}