import React from "react";
import { InputsContainer } from "./StyledEditRegister";
import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField";
import useForm from '../../../../hooks/useForm';
import {useHistory} from 'react-router-dom'
import {upDateProfile} from '../../../../services/api'



const EditForm = () => {
    const [form, onChange, clear] = useForm({ name: "", email: "",cpf:'' });
    const history = useHistory()

    const onSubmitForm = (event) => {
    console.log(form)
    event.preventDefault(); 
    upDateProfile(form,history)
    };

    return (
    <InputsContainer>
        <form onSubmit={onSubmitForm}>
            <TextField
                name={"name"}
                value={form.name}
                onChange={onChange}
                label={"Nome"}
                placeholder="Nome e sobrenome"
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"text"}
            />

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
                name={"cpf"}
                value={form.cpf}
                onChange={onChange}
                label={"CPF"}
                placeholder="000.000.000-00"
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"text"}
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

export default EditForm;