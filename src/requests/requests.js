import React from 'react'
import {BASE_URL} from '../constants/urls'
import axios from 'axios'
import { goToAdressPage, goToFeedPage } from "../routes/coordinator";

export const login = (body,history) => {
    axios
    .post(`${BASE_URL}/login`,body)
    .then((res) => {
        console.log(res.data.user)
        localStorage.setItem('token', res.data.token)
        if(res.data.user.hasAddress){
            goToFeedPage(history)
        }else{
            goToAdressPage(history)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}