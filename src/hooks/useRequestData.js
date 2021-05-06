import {useEffect, useState} from 'react'
import axios from 'axios'
import {BASE_URL} from '../constants/urls'

const useRequestData = (path,initialData) =>{
    const [data, setData] = useState(initialData)
    

    useEffect(() => {
        console.log(window.localStorage.getItem('token'))
        console.log(path)
        axios
        .get(`${BASE_URL}${path}`,{
            headers:{
                auth:window.localStorage.getItem('token')
            }
        })
        .then ((response)=>{
            setData(response.data)
        })
        .catch((err)=>{
            console.log(err)
            alert('Ocorreu um erro, tente novamente')
        })
    }, [])
    return[data]
}

export default useRequestData;