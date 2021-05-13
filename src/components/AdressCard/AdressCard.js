import React from  'react'
import {DivAdress, TitleAdress, EditTextAdress} from './StyledAdress'
import { useHistory} from 'react-router-dom'
import  useRequestData from '../../hooks/useRequestData'

export const AdressCard=()=>{
    const history =  useHistory()
    const [profile,setProfile] = useRequestData(`/profile/address`,{})

    return(
        <DivAdress>
            <TitleAdress>Endereço Cadastro</TitleAdress>
            <EditTextAdress>{ profile.address && profile.address.street},{profile.address && profile.address.number} -
            { profile.address && profile.address.neighbourhood} -{ profile.address && profile.address.city}</EditTextAdress>
        </DivAdress>
    )
}

export default AdressCard