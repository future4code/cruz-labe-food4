import React from 'react'
import EditAdress from '../../../components/EditAdressCard/EditAdressCard'
import PriceCard from '../../../components/PriceCard/PriceCard'

const ProfilePage = () =>{
    return (
    <div>
        {/* <h1>ProfilePage</h1>  */}
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
    </div>
    )
} 

export default ProfilePage