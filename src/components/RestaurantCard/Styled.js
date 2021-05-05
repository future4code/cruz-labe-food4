import styled from "styled-components";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import EditIcon from "@material-ui/icons/Edit";
import { CircularProgress } from '@material-ui/core';

export const AreaImg = styled.div`
  display: flex;
`;

export const CardImgComida =styled.img`
width:100px;
height:100px;
margin-left:10px;
`;

export const AreaItensLanche = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const NomeDoItem = styled.p`
  width: 166px;
  height: 18px;
  margin: 0 49px 6px 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
`;

export const ItensDoLanche = styled.p`
  width: 198px;
  height: 30px;
  margin: 6px 17px 6px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.34px;
  color: #b8b8b8;
`;

export const Preco = styled.p`
  width: 108px;
  height: 19px;
  margin: 6px 17px 15px 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;

export const ButtonAdd = styled.span`
  width: 40px;
  height: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  padding: 8px 20.5px 9px 21.5px;
  color: red;
  cursor: pointer;
  border-radius: 8px;
  border: solid 1px;
`;

export const Adicionar = styled.div`
  width: 48px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: red;
`;

