import React, { useEffect, useState } from 'react'
import GlobalStateContext from './GlobalStateContext'
import {BASE_URL} from '../constants/urls'
import axios from 'axios'

const GlobalState  =(props)=>{
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [neighbourhood, setNeighbourhood] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [complement, setComplement] = useState('')
    const [products, setProducts] = useState({})

    const login = (body) => {
        axios
        .post(`${BASE_URL}/login`,body)
        .then((res) => {
            // setProducts(res.data)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    const signUp = () => {
        axios
        .post(`${BASE_URL}/signup`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
        
    const addAdress = () => {
        axios
        .put(`${BASE_URL}/address`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

        
    const getFullAdress = () => {
        axios
        .get(`${BASE_URL}/profile/address`)
        .then((res) => {
            setProducts(res.data)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getProfile = () => {
        axios
        .get(`${BASE_URL}/profile`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const upDateProfile = () => {
        const body = {
            name: "",
            email: "",
            cpf: ""
        }
        axios
        .put(`${BASE_URL}/profile`, body)
        .then((res) => {
            setProducts(res.data)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

        
    const getRestaurants = () => {
        axios
        .get(`${BASE_URL}/restaurants`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getRestaurantsDetail = () => {
        axios
        .get(`${BASE_URL}/restaurants/:rest`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

        
    const placeOrder = () => {
        axios
        .post(`${BASE_URL}/restaurants/:restaurantId/order`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

        
    const getActiveOrder = () => {
        axios
        .get(`${BASE_URL}/active-order`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

        
    const ordersHistory = () => {
        axios
        .get(`${BASE_URL}/orders/history`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

//-----------------------------------------------------------------------------------------------------------------------------------

    const states = {email, password, name, cpf, street, number, neighbourhood, city, state, complement, products}
    const setters = {setEmail, setPassword, setName, setCpf, setStreet, setNumber, setNeighbourhood, 
                    setCity, setState, setComplement, setProducts}
    const requests = {login, signUp, addAdress, getFullAdress, getProfile, upDateProfile, getRestaurants, 
                    getRestaurantsDetail, placeOrder,getActiveOrder, ordersHistory}
    
    
    return (
        <GlobalStateContext.Provider
            value ={{
                states,
                setters,
                requests
            }}
        >
            {props.children}
        </GlobalStateContext.Provider>
        
    )
}

export default GlobalState