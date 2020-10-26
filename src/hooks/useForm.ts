import {useState} from 'react'

 function useForm(initialValues){
    const [values, setValues] = useState(initialValues);
    
    function setValue(chave, valor?) {
        setValues({ ...values, [chave]: valor });
    }
    
    function handleChangeValues(event) {
        setValue(
            event.target.getAttribute('name'),
            event.target.value,
            );
        }
        function clearForm(){
            setValue(initialValues)
        }

        return {
            values,
            handleChangeValues,
            clearForm
        }
    }

export default useForm