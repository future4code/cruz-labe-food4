import React from 'react'
import  styled from 'styled-components'
import {primaryColor} from '../../constants/colors'

const LayoutCard = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:left;
    width: 324px;
    height: 102px;
    margin: 7px 0 0;
    padding: 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`
const TitleCard = styled.p `
    color:${primaryColor};
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    font-weight:bold;
    letter-spacing:-0.39px;
    padding-top: 16px;
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 0px;
`

export const PriceCard = () =>{
    return(
        <LayoutCard>
            <TitleCard>Burguer Vila Madalena</TitleCard>
            <p>23 de outubro 2019</p>
            <p>Subtotal: R$67,00</p>
        </LayoutCard>
    )
}

export default PriceCard