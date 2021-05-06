import React from  'react'
import {DivAdress, TitleAdress, EditTextAdress} from './StyledAdress'

export const AdressCard=()=>{
    return(
        <DivAdress>
            <TitleAdress>Endereço Cadastro</TitleAdress>
            <EditTextAdress>Rua Alessandra Vieira, 42 -Santana</EditTextAdress>
        </DivAdress>
    )
}

export default AdressCard