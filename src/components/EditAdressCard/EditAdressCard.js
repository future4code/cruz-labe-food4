import React from  'react'
import {DivAdress, TitleAdress, EditTextAdress} from './StyledEditAdress'
import pencil from '../../assets/pencil.svg'
import { useHistory} from 'react-router-dom'
import {goToEditAdressPage} from '../../routes/coordinator'
import { upDateAdress } from '../../services/api'


export const EditAdress=()=>{
    const history =  useHistory()
    // const [profile,setProfile] = upDateAdress()

    return(
        <DivAdress>
            <TitleAdress>Endereço Cadastro</TitleAdress>
            {/* <EditTextAdress>{ profile.user && profile.user.street}</EditTextAdress> */}
            <EditTextAdress> Endereço test </EditTextAdress>
            <img onClick={() => goToEditAdressPage(history)}src ={pencil}/>
        </DivAdress>
    )
}

export default EditAdress