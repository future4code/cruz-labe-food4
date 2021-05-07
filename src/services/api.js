import React from 'react'
import {BASE_URL} from '../constants/urls'
import axios from 'axios'
import { goToAdressPage, goToFeedPage,goToProfilePage } from "../routes/coordinator";

// Arquivo fez para não usar o userequestdata pq não é get

const token = window.localStorage.getItem('token')

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

export const signUp = (body,history) => {
    axios
    .post(`${BASE_URL}/signup`,body)
    .then((res) => {
        console.log(res.data.user)
        localStorage.setItem('token', res.data.token)
        goToFeedPage(history)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const upDateProfile = (body,history) => {
    console.log("Teste",body,token)
    axios
    .put(`${BASE_URL}/profile`,body,{
        headers:{
            auth:token
        }
    })
    .then((res) => {
        console.log(res.data.user)
        goToProfilePage(history)
        
    })
    .catch((err) => {
        console.log(err)
        alert('Não foi possivel atualizar os dados')
    })
}

export const addAdress = (body,history) => {
    axios
    .put(`${BASE_URL}/address`,body,{
        headers:{
            auth:token
        }
    })
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToFeedPage(history)
    })
    .catch((err) => {
        console.log(err)
        alert(' Não foi possivel adicionar o endereço')
    })
}

export const getProfile = () => {
    axios
    .get(`${BASE_URL}/profile`,{
        headers:{
            auth:token
        }
    })
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

