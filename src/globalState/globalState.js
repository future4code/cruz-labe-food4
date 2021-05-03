import React, {useState} from 'react'
import GlobalStateContext from './globalContext'

const GlobalState  =()=>{
    
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [neighbourhood, setNeighbourhood] = useState('')
    const [city,setCity] = useState('')
    const [state, setState] = useState('')
    const [complement, setComplement] = useState('')
    const [products,setProducts] = useState({})

    const states = {email,password,name,cpf,street,number,neighbourhood,};
    const setters = { setCart, setProducts };
    const requests = { getProducts };

    return (
        <GlobalStateContext.Provider
        
    )
}