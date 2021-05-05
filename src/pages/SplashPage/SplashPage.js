import React from 'react'
import LogoRappi from '../../assets/logoRappi.svg'
import { BackgroundSplash, LogoImg } from './StyledSplash'
import { useHistory} from 'react-router-dom'
import {goToLoginPage} from '../../routes/coordinator'


export const SplashPage = () =>{
    const history = useHistory();
    return (
        <BackgroundSplash>
            <LogoImg onClick={() => goToLoginPage (history)}src ={LogoRappi}/>
        </BackgroundSplash>
    )
} 

export default SplashPage