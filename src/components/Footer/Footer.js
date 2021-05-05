import React from 'react';
import { useHistory } from 'react-router-dom'
import { goToProfilePage, goToCartPage, goToFeedPage } from '../../routes/coordinator'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import * as S from './Styled';


function Footer() {
  const history = useHistory()

  return (
    <S.Footer>
      <HomeIcon 
        fontSize="large"
        color='secondary'  
        onClick={() => goToFeedPage(history)}
      />
      <LocalGroceryStoreIcon 
        fontSize="large" 
        color='secondary' 
        onClick={() => goToCartPage(history)}
      />
      <PersonIcon 
        fontSize="large" 
        color='secondary' 
        onClick={() => goToProfilePage(history)}
      />
    </S.Footer>
  )
}

export default Footer;