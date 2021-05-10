import React, { useEffect, useState, useContext } from "react"
import { ContainerContent, ImageCard, Header, ContainerInfo, ContainerProduct, DivModal, BtnAdd, Card, ImageProduct, InfoProduct } from "./StyledRestaurant"
import { useParams } from 'react-router-dom';
import { goToBack } from '../../routes/coordinator';
import axios from 'axios';
import Modal from 'react-modal';
import { BASE_URL } from "../../constants/urls";
import GlobalStateContext from "../../globalState/GlobalStateContext";
import useForm from "../../hooks/useForm";

Modal.setAppElement('#root')

const RestaurantPage = () => {

    // const history = useHistory();
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { states, setters, requests } = useContext(GlobalStateContext);
    const [form, handleInputChange, clear] = useForm({ quantity: 0 })

    useEffect(() => {
        axios.get(`${BASE_URL}/restaurants/${params.id}`,
            {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setters.setRestaurants(res.data.restaurant);
                setProducts(res.data.restaurant.products);
            })
            .catch((err) => {
                console.log(err)
            })
            
    }, [params.id])

    // const addItemToCart = (newItem) => {
    //     const index = states.cart.findIndex((i) => i.id === newItem.id);
    //     let newCart = [...states.cart];
    //     if (index === -1) {
    //         console.log("Valor", form.quantity)
    //         newCart.push({ ...newItem, amount: Number(form.quantity) });
    //     } else {
    //         newCart[index].amount += Number(form.quantity);
    //     }
    //     setters.setCart(newCart);
    //     setters.setIdRestaurant(params.id)
    // };

    const [card, setCard] = useState('');
    const onClickButton = (item) => {
        setCard(item)
        setModalIsOpen(true)
    }

    const otherClick = () => {
        setModalIsOpen(false)
        // addItemToCart(card)
    }

    return (
        <ContainerContent>
            <Header />

            <ImageCard src={states.restaurant.logoUrl} />
            <ContainerInfo>
                <h4>{states.restaurant.name}</h4>
                <p>{states.restaurant.category}</p>
                <p>{states.restaurant.deliveryTime} min - R${states.restaurant.shipping},00</p>
                <p>{states.restaurant.address}</p>
            </ContainerInfo>
            <ContainerProduct>
                {products.map((i) => {
                    return (
                        <div key={i.id}>
                            <h4>{i.category}</h4>
                            <hr></hr>
                            <Card>
                                <ImageProduct src={i.photoUrl} />
                                <InfoProduct>
                                    <h4>{i.name}</h4>
                                    <p>{i.description}</p>
                                    <h3>R${i.price}</h3>
                                </InfoProduct>
                                <BtnAdd onClick={() => onClickButton(i)}>adicionar</BtnAdd>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={() => setModalIsOpen(false)}
                                    style={
                                        {
                                            overlay: {
                                                backgroundColor: 'none',
                                                height: '280px',
                                                width: '380px',
                                                top: '40%',
                                            },
                                        }
                                    }
                                >
                                    <DivModal>

                                        <h4>Selecione a quantidade desejada </h4>

                                        <select name={"quantidade"}
                                            value={form.quantity}
                                            handleInputChange={handleInputChange}>
                                            <option value="0" selected disabled>0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                        <button onClick={otherClick}>ADICIONAR AO CARRINHO</button>
                                    </DivModal>
                                </Modal>
                            </Card>
                        </div>
                    )
                })}

            </ContainerProduct>
        </ContainerContent>

    )
}

export default RestaurantPage