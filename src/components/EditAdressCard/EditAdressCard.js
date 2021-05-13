import React from  'react'
import {DivAdress, TitleAdress, EditTextAdress} from './StyledEditAdress'
import pencil from '../../assets/pencil.svg'
import { useHistory} from 'react-router-dom'
import {goToEditAdressPage} from '../../routes/coordinator'
import  useRequestData from '../../hooks/useRequestData'


export const EditAdress=()=>{
    const history =  useHistory()
    const [profile,setProfile] = useRequestData(`/profile/address`,{})


    return(
        <DivAdress>
            <TitleAdress>Endereço Cadastro</TitleAdress>
            <EditTextAdress> { profile.address && profile.address.street},{profile.address && profile.address.number} -
            { profile.address && profile.address.neighbourhood} - { profile.address && profile.address.city}</EditTextAdress>
            <img onClick={() => goToEditAdressPage(history)}src ={pencil}/>
        </DivAdress>
    )
}

export default EditAdress