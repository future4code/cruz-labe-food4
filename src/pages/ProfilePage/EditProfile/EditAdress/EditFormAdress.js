import React from "react";
import { InputsContainer } from "./StyledEditRegister";
import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField";
import useForm from '../../../../hooks/useForm';
import {useHistory} from 'react-router-dom'
import {upDateProfile} from '../../../../services/api'



const EditFormAdress = () => {
    const [form, onChange, clear] = useForm({ street: '', number: '', neighbourhood:'', city:'', state:'' });
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
                name={"street"}
                value={form.street}
                onChange={onChange}
                label={"Logradouro*"}
                placeholder="Rua/Av"
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"text"}
            />

            <TextField
                name={"number"}
                value={form.number}
                onChange={onChange}
                label={"Número"}
                placeholder="Nº"
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"number"}
            />

            <TextField
                name={"neighbourhood"}
                value={form.neighbourhood}
                onChange={onChange}
                label={"Bairro"}
                placeholder="Bairro"
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"text"}
            />

            <TextField
                name={"city"}
                value={form.city}
                onChange={onChange}
                label={"Cidade"}
                placeholder="Cidade"
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"text"}
            />

            <TextField
                name={"state"}
                value={form.state}
                onChange={onChange}
                label={"Estado"}
                placeholder="Estado"
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"text"}
            />

            <TextField
                name={"state"}
                value={form.state}
                onChange={onChange}
                label={"Estado"}
                placeholder="Estado"
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"text"}
            />

            <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            margin={"normal"}
            >
            Salvar
            </Button>

    </form>
    </InputsContainer>
    );
};

export default EditFormAdress;