import React from 'react'
import EditForm from './EditForm'
import {HederText,DivProfile, BackButton } from './StyledEditRegister'
import back from './../../../../assets/back.png'
import { useHistory } from 'react-router-dom'


export const EditRegisterPage =()=>{
    const history = useHistory()
    return(
        <DivProfile >
                <BackButton src={back} onClick={() => history.goBack()}/>
                <HederText>Editar</HederText>
                <EditForm/>   
        </DivProfile>
    )
}

export default EditRegisterPage