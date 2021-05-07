import styled from 'styled-components'
export const DivCart = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
export const HederText = styled.p `
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    font-weight:500;
    padding-top:12px;
`
export const ButtonConfirm = styled.button`
  width: 100%;
  height: 6.017vh;
  border-radius: 2px;
  background-color: #e86e5a;
  color: var(--dark-peach);
  border-color: #e86e5a;
  font-size: 2.29vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
   text-align: center;
 `

 export const DivDelivery = styled.div`
   padding-left: 16px;
   width: 100%;
 `

 export const DivDeliveryName = styled.div`
   height: 1.125rem;
   color: #e86e5a;
   /* width: 100%; */
 `

 export const DivDeliveryAddress = styled.div`
   height: 1.125rem;
   color: #b8b8b8;
   /* width: 100%; */
 `

 export const DivDeliveryTime = styled.div`
   height: 1.125rem;
   color: #b8b8b8;
   /* width: 100%; */
 `

 export const DivUniqueProduct = styled.div`
   display: flex;
   width: 100%;
  height: 7.038rem;
  margin-top: 0.313rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;  
`
export const DivProductImage = styled.img`
  height: 7.038rem;
  width: 7.063rem;
  background-color: #d8d8d8;
  border-radius: 8px 0 0 8px;
`
 export const DivProductInfo = styled.div`
   display: flex;
   flex-direction: column;
   padding-left: 5px;
   height: 6.997rem;
 `

export const DivNameProduct = styled.div`
  margin-top: 0.313rem;
  color: #e86e5a;
  height: 1rem;
`
export const DivIngredientes = styled.div`
  margin-top: 0.313rem;
  color: #b8b8b8;
  height: 1rem;
`
export const DivProductPrice = styled.div`
  margin-top: 0.313rem;
  height: 1rem;
  font-weight: bold;
`
export const DivExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const DivQuantity = styled.div`
  align-self: flex-end;
  width: 23px;
  height: 23px;
  padding: 7px 0 0 12px;
  border-radius: 0 8px 0 8px;
  border: solid 1px #e86e5a;
  color: #e86e5a;
`
export const ButtomRemove = styled.button`
  width: 5rem;
  height: 1.938rem;
  margin-top: 3.125rem;
  border-radius: 8px 0 8px 0;
  border: solid 1px #e02020;
  color: #e02020;
`
export const DivFrete = styled.div`
  width: 90%;
   text-align: right;
   font-size: 2.29vh;
   color: #000;
   margin: 5px 0 0 5px;
 `

 export const DivTotal = styled.div`
   width: 90%;
   display: flex;
   justify-content: space-between;
   flex-direction: row;
   margin: 5px 0 0 5px;
 `

 export const DivTotalPrice = styled.div`
  font-size: 2.29vh;
  color: #000;
`
export const DivPriceValor = styled.div`
  font-size: 2.29vh;
  color: #e86e5a;
  font-weight: bold;
`
 export const DivPayment = styled.div`
   width: 90%;
   font-size: 2.29vh;
   margin: 5px 0 0 5px;
 `