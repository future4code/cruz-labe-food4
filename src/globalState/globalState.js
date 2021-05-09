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
    const [restaurants, setRestaurants] = useState([])
    const [restaurant, setRestaurant] = useState([])
    const [cart, setCart] = useState([])
    const [idRestaurant, setIdRestaurant] = useState("")
    const [restaurantId, setRestaurantId] = useState("")
    const [restaurantData, setRestaurantData] = useState ({})

    // pegar o token localstorage infos
    const token = window.localStorage.getItem('token')

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

    const upDateProfile = (body,history) => {
        axios
        .put(`${BASE_URL}/profile`,body,{
            headers:{
                auth:token
            }
        })
        .then((res) => {
            console.log(res.data.user)
            // goToProfilePage(history)
            
        })
        .catch((err) => {
            console.log(err)
            alert('Não foi possivel atualizar os dados')
        })
    }

        
    const getRestaurants = () => {
        axios
        .get(`${BASE_URL}/restaurants`, {
            headers: {
                "auth": window.localStorage.getItem("token")
            }
        })
        .then((res) => {
            setRestaurants(res.data.restaurant)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getRestaurants()
    }, [])

    const getRestaurantId = () => {
        axios
        .get(`${BASE_URL}/restaurants/${restaurantId}`, {
            headers: {
                "auth": window.localStorage.getItem("token")
            }
        })
        .then(response => {
            setRestaurantData(response.data.restaurant)
            setProducts(response.data.restaurant.products)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        if (restaurantId) {
            getRestaurantId()
        }
    }, [restaurantId])
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

    const states = {email, password, name, cpf, street, number, neighbourhood, city, state, complement, products, restaurant, idRestaurant, restaurants, restaurantId, restaurantData}
    const setters = {setEmail, setPassword, setName, setCpf, setStreet, setNumber, setNeighbourhood, 
                    setCity, setState, setComplement, setProducts, setRestaurant, setIdRestaurant, setRestaurants, setRestaurantId}
    const requests = {login, signUp, addAdress, getFullAdress, getProfile, upDateProfile, getRestaurants, 
                    getRestaurantsDetail, placeOrder,getActiveOrder, ordersHistory, getRestaurants, getRestaurantId}
    
    
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