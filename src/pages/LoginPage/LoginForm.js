import React from "react";
import { InputsContainer } from "./StyledLogin";
import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import {useHistory} from 'react-router-dom'
import {login} from "../../services/user"



const LoginForm = () => {
  const history =useHistory()
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  
  const onSubmitForm = (event) => {
    event.preventDefault(); /*para não aparecer usuario e senha na barra endereço */
    console.log(form)
    login(form, clear,history)
}


    return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          placeholder="email@email.com"
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
        />

        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          placeholder="Senha com 6 caracteres"
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"password"}
        />

        <Button
          type={"submit"}
          fullWidth
          variant={"contained"} /*troca o tipo do botão @material */
          margin={"normal"}
        >
          Fazer Login
        </Button>

      </form>
    </InputsContainer>
  );

};
export default LoginForm;