import styled from 'styled-components';
import { secColor } from '../../constants/colors'

export const Footer = styled.div`
display: flex;
justify-content: space-around;
width: 360px;
height: 49px;
align-items: center;
padding: 5px;
box-sizing: border-box;
border-top: 1px solid ${secColor};
bottom: 0;
position: fixed;
 `;