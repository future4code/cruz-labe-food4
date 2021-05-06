import React from 'react'
import EditAdress from '../../../components/EditAdressCard/EditAdressCard'
import PriceCard from '../../../components/PriceCard/PriceCard'
import ProfileInfos from '../../../components/ProfileInfos/ProfileInfos'
import {DivProfile, HederText} from './StyledProfile'
import {HistoricTitle} from '../../../components/ProfileInfos/StyledProfileInfo'


const ProfilePage = () =>{

    return (
    <DivProfile>
        <HederText>Meu Perfil</HederText> 
            <hr></hr>
        <ProfileInfos/>
        <EditAdress/>
        <div>
            <HistoricTitle>Histórico de pedidos</HistoricTitle>
            <hr></hr>
            <PriceCard/>
        </div>
    </DivProfile>
    )
} 

export default ProfilePage