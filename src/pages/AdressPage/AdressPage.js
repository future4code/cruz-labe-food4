import React from 'react'
import AdressForm from './AdressForm'
import { BackImage, ScreenContainer } from './StyledAdress'
import back from '../../assets/back.png'

const AdressPage = () =>{

  return (
    <ScreenContainer>
      
      <BackImage src={back} onClick={() => null}/>
      <AdressForm />
    </ScreenContainer>
  )
}
export default AdressPage