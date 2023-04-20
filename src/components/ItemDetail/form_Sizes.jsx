import { products } from "../../Data/products"
export const Form_Size = () => {

    console.log(products)
    let {Id, Category, Name, Size, Price, Brand, Stock, Picture } = products[10]

    return(
        <form>
            <label className="text-black text-2xl">Talle: </label>
            <select className="ml-3 text-2xl">
                <option>{Size.at(0)}{Size.at(1)}</option>
                <option>{Size.at(3)}{Size.at(4)}</option>
                <option>{Size.at(6)}{Size.at(7)}</option>
                <option>{Size.at(9)}{Size.at(10)}</option>
                <option>{Size.at(12)}{Size.at(13)}</option>
                <option>{Size.at(15)}{Size.at(16)}</option>
            </select>
        </form> 
    )
}