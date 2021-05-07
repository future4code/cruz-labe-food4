import React from 'react'
import AdressForm from './AdressForm'
import { BackButton, ScreenContainer } from './StyledAdress'
import back from '../../assets/back.png'
import { useHistory } from 'react-router-dom'

const AdressPage = () =>{
  const history = useHistory()

  return (
    <ScreenContainer>
      
      <BackButton src={back} onClick={() => history.goBack()}/>
      <AdressForm />
    </ScreenContainer>
  )
}
export default AdressPage