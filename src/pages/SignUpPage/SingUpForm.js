import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './StyledSignUp'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { signup } from '../../services/api'
// import { goToAdressPage } from '../../routes/coordinator'


const SignUpForm = () => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ name: '', email: '',cpf:'', password: '' })
  

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
    signup(form, history)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={'name'}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.cpf}
            name={'cpf'}
            onChange={onChange}
            label={'CPF'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          // onClick={() => goToAdressPage(history)}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          Fazer Cadastro
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm
