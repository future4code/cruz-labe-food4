import React from 'react'
import EditFormAdress from './EditFormAdress'
import back from './../../../../assets/back.png'
import { useHistory } from 'react-router-dom'

const EditAdress = () =>{
    const history = useHistory()
    return (
    <div>
        <h1>EditAdress</h1> 
        <EditFormAdress/>
    </div>
    )
} 

export default EditAdress