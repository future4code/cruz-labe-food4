import React from 'react'
import LogoRappi from '../../assets/logoRappi.svg'
import { BackgroundSplash, LogoImg } from './StyledSplash'


export const SplashPage = () =>{
    return (
        <BackgroundSplash>
            <LogoImg src ={LogoRappi}/>
        </BackgroundSplash>
    )
} 

export default SplashPage