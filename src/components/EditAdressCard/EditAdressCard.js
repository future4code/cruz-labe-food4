import React from  'react'
import {DivAdress, TitleAdress, EditTextAdress} from './StyledEditAdress'
import pencil from '../../assets/pencil.svg'
import { useHistory} from 'react-router-dom'
import {goToEditAdressPage} from '../../routes/coordinator'

export const EditAdress=()=>{
    const history =  useHistory()
    return(
        <DivAdress>
            <TitleAdress>Endereço Cadastro</TitleAdress>
            <EditTextAdress>Rua Alessandra Vieira, 42 -Santana</EditTextAdress>
            <img onClick={() => goToEditAdressPage(history)}src ={pencil}/>
        </DivAdress>
    )
}

export default EditAdress