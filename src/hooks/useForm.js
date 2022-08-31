import { useState } from 'react'

export const useForm = ( initialForm = {}, formValidations={} ) => {
  
    const [formState, setFormState] = useState(initialForm)
    const [formValidation, setFormValidation] = useState({})

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }
    
    const isFormValid = useMemo( () => {
        
        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue] !== null) return false;
        }

        return true;
    }, [formValidation] );


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}