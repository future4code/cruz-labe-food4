import React from 'react'
import EditAdress from '../../../components/EditAdressCard/EditAdressCard'
import PriceCard from '../../../components/PriceCard/PriceCard'
import {DivProfile, HederText} from './StyledProfile'

const ProfilePage = () =>{
    return (
    <DivProfile>
        <HederText>Meu Perfil</HederText> 
            <div>
                <p>Bruna Oliveira</p>
                <p>bruna_o@gmail.com</p>
                <p>333.333.333.-33</p>
            </div>
                <EditAdress/>
            <div>
                <p>Histórico de pedidos</p>
                <hr></hr>
                <PriceCard/>
            </div>
    </DivProfile>
    )
} 

export default ProfilePage