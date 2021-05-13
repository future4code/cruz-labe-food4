import React from 'react'
import logo from '../../assets/logo.png'
import { ScreenContainer } from './StyledSignUp'
import { LogoImage } from './StyledSignUp'
import useProtectedPage from '../../hooks/useUnprotected'
import SignUpForm from './SingUpForm'

const SignUpPage = () => {
    useProtectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <SignUpForm />
    </ScreenContainer>
  )
}

export default SignUpPage