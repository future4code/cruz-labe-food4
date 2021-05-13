import React from 'react'
import EditAdress from '../../../components/EditAdressCard/EditAdressCard'
import PriceCard from '../../../components/PriceCard/PriceCard'
import ProfileInfos from '../../../components/ProfileInfos/ProfileInfos'
import {DivProfile, HederText,BackButton} from './StyledProfile'
import {HistoricTitle} from '../../../components/ProfileInfos/StyledProfileInfo'
import back from '../../../assets/back.png'
import { useHistory } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'


const ProfilePage = () =>{
    const history = useHistory()
    return (
    <DivProfile>
        <BackButton src={back} onClick={() => history.goBack()}/>
        <HederText>Meu Perfil</HederText> 
            <hr></hr>
        <ProfileInfos/>
        <EditAdress/>
        <div>
            <HistoricTitle>Histórico de pedidos</HistoricTitle>
            <hr></hr>
            <PriceCard/>
        </div>
        <Footer/>
    </DivProfile>
    )
} 

export default ProfilePage