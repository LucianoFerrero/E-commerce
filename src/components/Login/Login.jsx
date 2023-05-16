import { useState } from 'react';
import Ice from '../../assets/Ice.png'
export const Login = () => {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')

    return(

        <div className="w-auto h-2/3 border-2 border-black m-auto mt-20 flex items-center p-6 inline-grid grid-cols-2 bg-[$(`Ice`)]">


            <p className="flex text-3xl inline-block justify-center col-span-1">Inicia Sesion</p> 
            
            <form className="grid text-lg flex col-span-2" 
                onSubmit={ev => {
                        ev.preventDefault()
                        console.log({userName})
                        console.log({userEmail}) 
                        console.log({userPhone})
                    }
                }
            >
    
                Nombre:
                <input 
                    className="border border-black" 
                    type="text" 
                    name="name" 
                    autoComplete='off'
                    value={userName}
                    onChange={ev => setUserName(ev.target.value)}
                ></input>
                Email:
                <input 
                    className="border border-black"
                    type="email" 
                    name="email" 
                    autoComplete='off'
                    onChange={ev => setUserEmail(ev.target.value)}
                ></input>
                Telefono:
                <input 
                    className="border border-black" 
                    type="tel" 
                    name="phone" 
                    autoComplete='off'
                    onChange={ev => setUserPhone(ev.target.value)}
                ></input>
                <button type="submit">
                    Enviar
                </button>

            </form>
            
        </div>

    )

}