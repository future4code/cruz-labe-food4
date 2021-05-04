import React from 'react'
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

            <div>
                <p>Endereço Cadastro</p>
                <p>Rua Alessandra Vieira, 42 -Santana</p>
            </div>

            <div>
                <p>Histórico de pedidos</p>
                <hr></hr>
                <PriceCard/>
            </div>
    </div>
    )
} 

export default ProfilePage