import React, { useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Filter, Filters, ContainerContent, Header, Input, ContainerSearch, Card, ImageCard, DetailCard, ContainerFilter, MenuFeed } from './StyledFeed'
import { useState } from 'react';
import { goToRestaurantPage, goToProfilePage, goToCartPage } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm'
import CardProgress from '../../components/CardProgress/CardProgress';
import useProtectedPage from '../../hooks/useProtected';

const FeedPage = () => {
    useProtectedPage()
    const [restaurants, setRestaurants] = useState([]);
    const history = useHistory();
    const [form, onChange, clearFields] = useForm({ busca: "" })
    const [pedido, setPedido] = useState({})

    const filterRestaurants = () => {
        let filteredPosts = restaurants.filter(
            (restaurant) =>
                restaurant.name.toLowerCase().includes(form.busca.toLowerCase()) ||
                restaurant.description.toLowerCase().includes(form.busca.toLowerCase())
        )
        return filteredPosts;
    };

    const onClickRestaurantPage = (id) => {
        goToRestaurantPage(history, id)
    }

    const headers = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }
    useLayoutEffect(() => {
        axios.get(`${BASE_URL}/active-order`, headers)
        .then((res) => {
            console.log("Ok", res.data.order)
            setPedido(res.data.order)
        })
        .catch((err) => {
            console.log("Deu problema", err)
    })

}, [])

    useEffect(() => {
        axios.get(`${BASE_URL}/restaurants`, headers)
            .then((res) => {
                setRestaurants(res.data.restaurants)
            })
            .catch((err) => {
                console.log(err)
            })
        
        }, [pedido])
           console.log("Pedido", pedido)

    const filteredRestaurants = filterRestaurants();
    return (
        <ContainerContent>
            <Header>
                <p>FutureEats</p>
            </Header>
            <ContainerSearch>
                <Input
                    placeholder='Restaurante'
                    name={"busca"}
                    value={form.busca}
                    onChange={onChange}
                />
            </ContainerSearch>
            <ContainerFilter>
                <Filters>
                <Filter>Burger</Filter>
                <Filter>Asiática</Filter>
                </Filters>
            </ContainerFilter>
            {filteredRestaurants.map((i) => {
                return (
                    <Card onClick={() => onClickRestaurantPage(i.id)}>
                        <ImageCard src={i.logoUrl} />
                        <h4>{i.name}</h4>
                        <DetailCard>
                            <p>{i.deliveryTime} min</p>
                            <p>Frete R${i.shipping},00</p>
                        </DetailCard>
                    </Card>

                )
            })}
            {pedido === null?  <p></p> : <CardProgress restaurant={pedido.restaurantName} total={pedido.totalPrice}/> }
            

        </ContainerContent>
    )
}

export default FeedPage