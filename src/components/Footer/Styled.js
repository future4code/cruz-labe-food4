import styled from 'styled-components';
import { secColor } from '../../constants/colors'

export const Footer = styled.div`
display: flex;
justify-content: space-between;
width: 320px;
height: 40px;
align-items: center;
padding: 5px;
box-sizing: border-box;
border-top: 1px solid ${secColor};
bottom: 0;
padding-top:8px;
position: fixed;
margin: 1px auto;
 `