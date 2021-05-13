import React from 'react'
import {LayoutCard,TitleCard,DateCard,SubtotalCard} from './StyledPriceCard'

export const PriceCard = () =>{
    return(
        <LayoutCard>
            <TitleCard>Burguer Vila Madalena</TitleCard>
            <DateCard>23 de outubro 2019</DateCard>
            <SubtotalCard>Subtotal: R$67,00</SubtotalCard>
        </LayoutCard>
    )
}

export default PriceCard