import  styled from 'styled-components'
import {primaryColor,secondaryColor,neutralColor} from '../../constants/colors'

export const LayoutCard = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:left;
    width: 324px;
    height: 106px;
    margin: 7px 0 0;
    padding: 16px;
    padding-top:12px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`
export const TitleCard = styled.p `
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
export const DateCard = styled.p `
    color:${secondaryColor};
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:12px;
    font-weight:bold;
    letter-spacing:-0.39px;
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 0px;
`
export const SubtotalCard = styled.p `
    color:${neutralColor};
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:18px;
    font-weight:bold;
    letter-spacing:-0.39px;
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 0px;
    text-transform:uppercase;
`