export const Form_Size = ({products}) => {

    let {Size} = products

    return(
        <form className="mt-4 mb-4">
            <label className="text-black text-2xl rounded bg-white border-2 border-black">Talle: </label>
            <select className="ml-3 text-2xl border-2 border-black">
                <option>{Size.at(0)}</option>
                <option>{Size.at(1)}</option>
                <option>{Size.at(2)}</option>
                <option>{Size.at(3)}</option>
                <option>{Size.at(4)}</option>
                <option>{Size.at(5)}</option>
            </select>
        </form> 
    )
}