import axios from 'axios';
import {BASE_URL} from '../constants/urls'
import { goToFeedPage } from '../routes/coordinator';



  export const login = (body, clear, history) => {
    
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(history)
        })
        .catch((err) => {
            
            alert(err.response.data.message)
        })
}

const signup = (body) => {
  const request = axios.post('/singup', body);
  return request.then((response) => response.data);
};

const addAddress = (body, token) => {
  const request = axios.put('/address', body, {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const getFullAddress = (token) => {
  const request = axios.get('/profile/address', {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const getProfile = (token) => {
  const request = axios.get('/profile', {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const updateProfile = (body, token) => {
  const request = axios.put('/perfil', body, {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const getRestaurants = (token) => {
  const request = axios.get('/restaurants', {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const getRestaurantDetail = (token, id) => {
  const request = axios.get(`/restaurants/${id}`, {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const placeOrder = (body, token, id) => {
  const request = axios.post(`/restaurants/${id}/order`, body, {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const getActiveOrder = (token) => {
  const request = axios.get(`/active-order`, {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const ordersHistory = (token) => {
  const request = axios.get(`/orders/history`, {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

export default {
  login,
  signup,
  addAddress,
  getFullAddress,
  getProfile,
  updateProfile,
  getRestaurants,
  getRestaurantDetail,
  placeOrder,
  getActiveOrder,
  ordersHistory,
};