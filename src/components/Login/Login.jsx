import { useState, useEffect, useContext} from 'react';
import Ice from '../../assets/Ice.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../../Contexts/FormContext';
import { Nav_Bar } from '../NavBar/Nav_Bar';
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, setDoc, where } from "firebase/firestore"

export const Login = () => {

    const {formData, updateFormData, setIsLoged } = useContext(FormContext)

    const { register, formState: { errors }, handleSubmit } = useForm()

    const navigate = useNavigate()

    const notify = () => toast('Bienvenido')

    const handleLogin = (data, e) => {
        e.preventDefault()
        const updateData = {...formData, data}
        updateFormData(updateData)
        setIsLoged(true)
        navigate("/home", { replace: true })
    }

//    const sendData = async () => {
//         await setDoc(doc(db, 'Ordenes'), {
//             formData
//         })
//     }


    return(

        <div className="w-auto h-2/3 border-2 border-black m-auto mt-20 flex items-center p-6 inline-grid grid-cols-2 bg-[$(`Ice`)]">


            <p className="flex text-3xl inline-block justify-center col-span-1">Inicia Sesion</p> 
            
            <form className="grid text-lg flex col-span-2" 
                onSubmit={handleSubmit(handleLogin)}
            >
    
                Nombre:
                <input className='border-2 border-black'
                    type="text" 
                    {...register('Nombre', {
                        required: true,
                        maxLength: 10
                    })}>
                </input>
                {errors.Nombre?.type === 'required' && <p>El campo es requerido</p>}
                {errors.Nombre?.type === 'maxLength' && <p>Maximo 10 caracteres</p>}

                
                Email:
                <input className='border-2 border-black' 
                    type="email" 
                    {...register('Email', {
                        required: true,
                    })}>
                </input>
                {errors.Email?.type === 'required' && <p>El campo es requerido</p>}                
                Telefono:
                <input className='border-2 border-black'
                    type="phone" 
                    {...register('Telefono', {
                        required: true,
                        maxLength: 10
                    })}>
                </input>
                {errors.Telefono?.type === 'required' && <p>El campo es requerido</p>}
                {errors.Nombre?.type === 'maxLength' && <p>Maximo 10 caracteres</p>}
                
                <div className='flex justify-center'>
                    <button className='bg-ice border-2 border-black justify-center mt-5' 
                        type="submit">
                            Enviar
                    </button>
                </div>
            </form>
        </div>

    )


}