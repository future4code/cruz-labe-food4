import React,{ useEffect } from 'react'
import { useContext } from 'react'
import {DivInfos,InfosText} from './StyledProfileInfo'
import  GlobalStateContext  from '../../globalState/GlobalStateContext'

export const ProfileInfos =()=>{
    const { states, setters,requests} = useContext(GlobalStateContext)
    const { name, setName} = useContext(GlobalStateContext)
    const { email, setEmail} = useContext(GlobalStateContext)
    const {cpf, setCpf}=useContext(GlobalStateContext)

    useEffect(() => {
        requests.upDateProfile()
    }, [requests])

    return(
        <DivInfos>
            <InfosText>Bruna Oliveira</InfosText>
            <InfosText>bruna_o@gmail.com</InfosText>
            <InfosText>333.333.333.-33</InfosText>
        </DivInfos>
    )
}

export default ProfileInfos

