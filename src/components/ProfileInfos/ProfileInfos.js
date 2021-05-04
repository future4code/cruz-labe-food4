import React from 'react'
import styled from 'styled-components'

const DivInfos = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:left;
    align-items:left;
    width: 100%;
    height: 100px;
    margin-top:16px;
`
const InfosText =styled.p `
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    font-weight:500;
    letter-spacing:-0.42px;
    padding-bottom:5px;
    padding-left:24px;
    margin-top: 0px;
    margin-bottom: 5px;
`



export const ProfileInfos =()=>{
    return(
        <DivInfos>
            <InfosText>Bruna Oliveira</InfosText>
            <InfosText>bruna_o@gmail.com</InfosText>
            <InfosText>333.333.333.-33</InfosText>
        </DivInfos>
    )
}

export default ProfileInfos

