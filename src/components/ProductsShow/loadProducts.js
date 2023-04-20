import { products } from "../../Data/products"
export const loadProducts = () => {

    return new Promise((res, rej)=> {
        setTimeout(()=>{
            res(products)
        }, 3000)
    })
}