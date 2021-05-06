import React from 'react' 
import { TextField } from "@material-ui/core"
import useForm from '../../hooks/useForm'

const InputsBox = () => {
    const [onChange] = useForm({ email: "", password: "" })
   return(
   <TextField
   onChange={onChange}
   variant={"outlined"}
   fullWidth
   margin={"normal"}
   
   />
   )
 }

 export default InputsBox

 /*
name={obrigatorio}
value={form.batata}
label={obrigatorio}
placeholder="email@email.com" 
type={"email"}
required
autofocus

 */