import { createContext, useState } from "react";

const FormContext = createContext()

const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({})
    const [ isLoged, setIsLoged ] = useState(false)

    const updateFormData = (data) => {
        setFormData(data)
    }

    console.log(formData)

    return(
        <FormContext.Provider value={{formData, updateFormData, setIsLoged, isLoged}}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider}