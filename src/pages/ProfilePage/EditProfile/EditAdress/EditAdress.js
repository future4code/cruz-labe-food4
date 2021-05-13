import React from 'react'
import EditFormAdress from './EditFormAdress'
import back from './../../../../assets/back.png'
import { useHistory } from 'react-router-dom'
import {HederText,BackButton,DivProfile  } from './StyleEditAdress'

const EditAdress = () =>{
    const history = useHistory()
    return (
    <DivProfile >
        <BackButton src={back} onClick={() => history.goBack()}/>
        <HederText>EditAdress</HederText> 
        <EditFormAdress/>
    </DivProfile>
    )
} 

export default EditAdress