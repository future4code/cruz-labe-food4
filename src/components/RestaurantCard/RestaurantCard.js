import React from "react";
import { useHistory } from 'react-router-dom'
import * as S from "./Styled";
/**import Header from "" */
/**import Footer from "../../components/Footer/Footer"; */
import { BaseUrl } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { goToRestaurantPage } from '../../routes/coordinator'
import styled from 'styled-components'

const Rectangle =styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-radius: 8px;
border: solid 1px #b8b8b8;
margin:10px;
p{
  padding:10px;
  text-align:justify;
}
`  
const Img=styled.img`
width:130px;
height:120px;
`
const AreaInfo=styled.div`
display:flex;
`

export default function RestaurantCard(props) {
  const restaurants = useRequestData(`${BaseUrl}/restaurants`, []);

  console.log(restaurants);

  const history = useHistory()
  console.log (props.id)

  return (
   
  <Rectangle onClick={() => goToRestaurantPage(history, props.id)}>
    <p><b>{props.category} </b></p> 
    <Img src = {props.logoUrl}/>
    <p>{props.description}</p>
    <AreaInfo>
    <p><b>{props.name}</b></p> 
    <p>{props.deliveryTime} - min</p> 
    <p> Frete R$ {props.shipping}</p> 
    </AreaInfo>
</Rectangle>

  );
}