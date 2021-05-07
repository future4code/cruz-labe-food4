import React from 'react'
import {DivCart, HederText, ButtonConfirm, DivUniqueProduct, DivNameProduct, DivProductPrice, DivIngredientes, DivTotal, DivPriceValor, DivProductImage, DivFrete, DivTotalPrice, DivPayment, DivProductInfo, DivExtraInfo, DivQuantity, ButtomRemove} from './StyledCart'
import AdressCard from '../../components/AdressCard/AdressCard'
import Footer from '../../components/Footer/Footer'
import Burguer from '../../assets/burguer.png';
// import ProfileInfos from '../../components/ProfileInfos/ProfileInfos'


const CartPage = () =>{

    // state = {
    //     selected: 'radio-1'
    // };
    // componentDidUpdate () {
    //     alert(document.querySelector('input[name=myRadio]:checked').value);
    // }
    // render () {
    
    return (
        <DivCart>
            <HederText>Meu Carrinho</HederText> 
            <hr />
            <AdressCard />
            {/* <ProfileInfos /> */}
            <div> Infos de Entrega </div>
            <div> 
                <DivUniqueProduct>
                    <DivProductImage src={Burguer}>

                    </DivProductImage> 
                    <DivProductInfo>
                        <DivNameProduct>Stencil </DivNameProduct> 
                        <DivIngredientes>Pão, carne, queijo, cebola roxa, tomate, alface e molho. </DivIngredientes>
                        <DivProductPrice>R$46,00</DivProductPrice>
                    </DivProductInfo> 
                    <DivExtraInfo>
                        <DivQuantity>2</DivQuantity>
                        <ButtomRemove>remover</ButtomRemove>
                    </DivExtraInfo>      
                        
                    
                </DivUniqueProduct>  
                <DivUniqueProduct>
                    <DivProductImage src={Burguer}>

                    </DivProductImage> 
                    <DivProductInfo>
                        <DivNameProduct> Cheese Fries </DivNameProduct>
                        <DivIngredientes>Porção de fritas temperada com páprica e queijo derretido. </DivIngredientes>
                        <DivProductPrice>R$15,00</DivProductPrice> 
                    </DivProductInfo>
                    <DivExtraInfo>
                        <DivQuantity>1</DivQuantity>
                        <ButtomRemove>remover</ButtomRemove>
                    </DivExtraInfo>   
                        
                    
                </DivUniqueProduct>   
            </div>
            <DivFrete>Frete R$6,00</DivFrete>
            <DivTotal>
                <DivTotalPrice>SUBTOTAL </DivTotalPrice>
                <DivPriceValor> R$67,00</DivPriceValor>
            </DivTotal>
            <DivPayment> Forma de Pagamento </DivPayment>
            <hr />
            {/* <input type='radio' id='radio-1' name='myRadio' value='radio-1'
                   checked={this.state.selected === 'radio-1'} onChange={(e) => this.setState({ selected: e.target.value })} />
            <br />
            <input type='radio' id='radio-2' name='myRadio' value='radio-2' 
                   checked={this.state.selected === 'radio-2'} onChange={(e) => this.setState({ selected: e.target.value })} /> */}
            
            <ButtonConfirm> Confirmar </ButtonConfirm>
            <Footer />
        </DivCart>
    );
    
    
} 

export default CartPage

