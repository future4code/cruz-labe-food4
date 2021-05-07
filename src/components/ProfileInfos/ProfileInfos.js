import React,{ useEffect} from 'react'
import { useHistory} from 'react-router-dom'
import { useContext } from 'react'
import {DivInfos,InfosText} from './StyledProfileInfo'
import pencil from '../../assets/pencil.svg'
import {goToEditRegisterPage} from '../../routes/coordinator'
import useRequestData from '../../hooks/useRequestData'

export const ProfileInfos =()=>{
    const history =  useHistory()
    const [profile,setProfile] = useRequestData(`/profile`,{})


    return(
        <DivInfos>
            <InfosText>{ profile.user && profile.user.name}</InfosText><img onClick={() => goToEditRegisterPage(history)}src ={pencil}/>
            <InfosText>{ profile.user && profile.user.email}</InfosText>
            <InfosText>{ profile.user && profile.user.cpf}</InfosText>
        </DivInfos>
    )
}

export default ProfileInfos

