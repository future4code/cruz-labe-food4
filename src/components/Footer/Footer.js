import React from 'react';
import { useHistory } from 'react-router-dom'
import { goToProfilePage, goToCartPage, goToFeedPage } from '../../routes/coordinator'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import * as S from './Styled';

function Footer() {
  const history = useHistory()

  return (
    <S.Footer>
      <HomeIcon 
        fontSize="27px"
        color='primaryColor'  
        onClick={() => goToFeedPage(history)}
      />
      <LocalGroceryStoreIcon 
        fontSize="27px" 
        color='primaryColor' 
        onClick={() => goToCartPage(history)}
      />
      <PersonIcon 
        fontSize="27px" 
        color='secondaryColor' 
        onClick={() => goToProfilePage(history)}
      />
    </S.Footer>
  )
}

export default Footer;