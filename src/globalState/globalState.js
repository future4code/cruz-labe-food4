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

    useEffect(() => {
        login();
        }, []);

    const login = () => {
        axios
        .post(`${BASE_URL}/login`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        signUp();
        }, []);

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

    useEffect(() => {
        addAdress();
        }, []);
        
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

    useEffect(() => {
        getFullAdress();
        }, []);
        
    const getFullAdress = () => {
        axios
        .get(`${BASE_URL}/profile/address`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getProfile();
        }, []);
        
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

    useEffect(() => {
        upDateProfile();
        }, []);
        
    const upDateProfile = () => {
        axios
        .put(`${BASE_URL}/profile`)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getRestaurants();
        }, []);
        
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

    useEffect(() => {
        getRestaurantsDetail();
        }, []);
        
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

    useEffect(() => {
        placeOrder();
        }, []);
        
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

    useEffect(() => {
        getActiveOrder();
        }, []);
        
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

    useEffect(() => {
        ordersHistory();
        }, []);
        
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