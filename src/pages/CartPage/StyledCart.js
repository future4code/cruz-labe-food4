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
  /* width: 328px; */
  width: 100%;
  /* height: 42px; */
  height: 6.017vh;
  /* padding: 12px 16px; */
  /* padding: 1.719vh 2.292vw; */
  border-radius: 2px;
  background-color: #e86e5a;
  color: var(--dark-peach);
  /* font-family: Roboto; */
  /* font-size: 16px; */
  border-color: #e86e5a;
  font-size: 2.29vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
`

export const DivUniqueProduct = styled.div`
  display: flex;
  /* width: 328px; */
  width: 100%;
  /* height: 112px; */
  height: 16.04vh;
  margin: 5px 0 0 0;
  /* padding: 0 0 0 113px; */
  border-radius: 8px;
  border: solid 1px #b8b8b8;  
`

export const DivProductImage = styled.img`
  /* height: 16.13vh; */
  height: 16.04vh;
  /* width: 1.26em; */
  width: 113px;
  background-color: #d8d8d8;
  border-radius: 8px 0 0 8px;
`

export const DivProductInfo = styled.div`
  display: flex;
  height: 16.04vh;
  /* background-color: yellow; */

`

export const DivExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 16.13vh;
`

export const DivQuantity = styled.div`
  align-self: flex-end;
  width: 23px;
  height: 23px;
  /* margin: 0 0 9px 16px; */
  padding: 7px 0 0 12px;
  border-radius: 0 8px 0 8px;
  border: solid 1px #e86e5a;
  color: #e86e5a;
`

export const ButtomRemove = styled.button`
  align-self: flex-end;
  width: 90px;
  height: 31px;
  /* margin: 9px 0 0 117px; */
  /* padding: 8px 23px 9px 24px; */
  border-radius: 8px 0 8px 0;
  border: solid 1px #e02020;
  color: #e02020;
`

export const DivFrete = styled.div`
  width: 100%;
  text-align: right;
  font-size: 2.29vh;
  color: #000;
`

export const DivTotalPrice = styled.div`
  width: 100%;
  font-size: 2.29vh;
  color: #000;
`

export const DivPayment = styled.div`
  width: 100%;
  font-size: 2.29vh;
  
`

