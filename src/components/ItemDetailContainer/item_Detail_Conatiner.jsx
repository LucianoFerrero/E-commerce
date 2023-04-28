import { useEffect, useState } from "react"
import { Item_Detail } from "../ItemDetail/Card_Product_Detail"
import { products } from "../../Data/products"
import { useParams } from "react-router-dom"
export const Item_Detail_Container = () => {

    const [detailProducts, setDetailProducts ] = useState(null)

    const { pId } = useParams()
    console.log(pId)

    useEffect(()=>{

        setDetailProducts(products.find((product) => product.Id == pId))

    }, [pId])

    if(!deatilProducts){
        return(<h1>Loading</h1>)
    }

    return(
        <div className="w-full h-full flex justify-center">

            <Item_Detail products={detailProducts} product={setDetailProducts}/>
        </div>
    )

}