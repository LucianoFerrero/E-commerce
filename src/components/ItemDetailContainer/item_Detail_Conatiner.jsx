import { useEffect, useState } from "react"
import { Item_Detail } from "../ItemDetail/Card_Product_Detail"
import { products } from "../../Data/products"
import { useParams } from "react-router-dom"
export const Item_Detail_Container = () => {

    const [deatilProducts, setDetailProducts ] = useState(null)

    const { pId } = useParams()
    console.log(pId)

    useEffect(()=>{

        setDetailProducts(products.find((product) => product.Id == pId))

    }, [pId])

    console.log(products)

    if(!deatilProducts){
        return(<h1>Loading</h1>)
    }

    return(
        <div className="w-full h-full flex justify-center">

            <Item_Detail products={deatilProducts}/>
        
        </div>
    )

}