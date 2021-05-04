import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import SplashPage from "../pages/SplashPage/SplashPage"
import LoginPage from '../pages/LoginPage/LoginPage'
import SingUpPage from '../pages/SignUpPage/SignUp'
import ProfilePage from '../pages/ProfilePage/Profile/ProfilePage'
import FeedPage from '../pages/FeedPage/FeedPage'
import SearchPage from '../pages/SearchPage/SearchPage'
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage"
import CartPage from '../pages/CartPage/CartPage'
import ProgressPage from '../pages/ProgressPage/ProgressPage'


const Router = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' >
                    <SplashPage />
                </Route>
                <Route exact path='/login' >
                    <LoginPage />
                </Route>
                <Route exact path='/cadastro' >
                    <SingUpPage />
                </Route>
                <Route exact path='/perfil' >
                    <ProfilePage />
                </Route>
                <Route exact path='/feed' >
                    <FeedPage />
                </Route>
                <Route exact path='/busca' >
                    <SearchPage />
                </Route>
                <Route exact path='/restaurante/:id' >
                    <RestaurantPage />
                </Route>
                <Route exact path='/carrinho' >
                    <CartPage />
                </Route>
                <Route exact path='/andamento' >
                    <ProgressPage />
                </Route>
                

            </Switch>
        </BrowserRouter>
    )
        
    
}
export default Router