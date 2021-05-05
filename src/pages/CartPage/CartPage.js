import React from 'react'
import {DivCart, HederText, ButtonConfirm, DivUniqueProduct, DivProductImage, DivFrete, DivTotalPrice, DivPayment} from './StyledCart'
// import EditAdress from '../../../components/EditAdressCard/EditAdressCard'
// import ProfileInfos from '../../../components/ProfileInfos/ProfileInfos'

const CartPage = () =>{
    return (
        <DivCart>
            <HederText>Meu Carrinho</HederText> 
            <hr />
            <div> Endereço de Entrega </div>
            <div> Infos de Entrega </div>
            <div> 
                <DivUniqueProduct>
                    <DivProductImage>
                    </DivProductImage>    
                    Produto 1    
                </DivUniqueProduct>  
                <DivUniqueProduct> 
                <DivProductImage>
                    </DivProductImage>
                    Produto 2
                </DivUniqueProduct>   
            </div>
            <DivFrete>Frete R$6,00</DivFrete>
            <DivTotalPrice>SUBTOTAL </DivTotalPrice>
            <DivPayment> Forma de Pagamento </DivPayment>
            <hr />
            {/* <div>
            <form>
            <input type="radio" name="dinheiro" value="op1"> Dinheiro
            <input type="radio" name="credito" value="op2"> Cartão de Crédito
            </form>
            </div> */}
            <ButtonConfirm> Confirmar </ButtonConfirm>
            {/* <ProfileInfos/> */}
            {/* <EditAdress/> */}
        </DivCart>
    )
} 

export default CartPage

