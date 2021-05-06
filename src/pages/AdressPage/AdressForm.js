import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import useForm from '../../hooks/useForm'
import { goToFeedPage } from '../../routes/coordinator'
import { AdressFormContainer, InputsContainer } from './StyledAdress'

const AdressForm = () => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    getAdress(form, clear, history)
    console.log(form)
  }

  const getAdress = (form, clear, history) => {
    const axiosConfig ={
      headers: {
        auth: localStorage.getItem('token')
      }
    }

    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/rappi4B/address`, form, axiosConfig)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      goToFeedPage(history)
      clear()
    })
    .catch(error => {console.log(error)
    })
  }

  return (
    <form onSubmit={onSubmitForm}>
      <AdressFormContainer>
        <p><strong>Meu endereço</strong></p>
        <InputsContainer>
          <TextField 
            name={"street"}
            value={form.street}
            label={"Rua"}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            type={"street"}
            required
            autoFocus
            fullWidth
          />
          <TextField 
            name={"number"}
            value={form.number}
            label={"Número"}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            type={"number"}
            required
            autoFocus
            fullWidth
          />
          <TextField 
            name={"neighbourhood"}
            value={form.neighbourhood}
            label={"Bairro"}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            type={"neighbourhood"}
            required
            autoFocus
            fullWidth
          />
          <TextField 
            name={"city"}
            value={form.city}
            label={"Cidade"}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            type={"city"}
            required
            autoFocus
            fullWidth
          />
          <TextField 
            name={"state"}
            value={form.state}
            label={"Estado"}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            type={"state"}
            required
            autoFocus
            fullWidth
          />
          <TextField 
            name={"complement"}
            value={form.complement}
            label={"Complemento"}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            type={"complement"}
            autoFocus
            fullWidth
          />

        </InputsContainer>
        <Button
          type={"submit"}
          variant={"contained"}
          color={"primary"}
          margin={"normal"}
          fullWidth
        >
          Salvar
        </Button>
      </AdressFormContainer>
    </form>
  )
}

export default AdressForm