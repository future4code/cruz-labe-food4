// import { Typography } from '@material-ui/core'
// import React, { useEffect, useState } from 'react'
// import Footer from '../../components/Footer/Footer'
// import { ScreenContainer } from './StyledAdress'
// import { OrderPriceContainer } from './StyledProgress'

// const ProgressPage = () => {
//     const [order, setOrder] = useState([])

//     useEffect(() => {
//         (async() => {
//             const result = await getActiveOrder()
//             result.status && setOrders(result.order)
//         }) ()
//     }, [])

//     return (
        
//             <ScreenContainer>
//                 <div>
//                     <Typography variant="h5">Pedido em andamento</Typography>
//                     <Typography variant="h5">{orders.restaurantName}</Typography>
//                     <OrderPriceContainer>
//                         <Price>Subtotal</Price>
//                             {orders.totalPrice && orders.totalPrice.toLocalString("pt-br", {
//                                 style: 'currency',
//                                 currency: 'BRL',
//                             })}
                    
//                     </OrderPriceContainer>
                
//                 </div>
//                 <Footer />
//             </ScreenContainer>
        
// )
// } 

// export default ProgressPage