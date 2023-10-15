'use client'

import { useState } from "react"
import Method from "./method/method"
import PaymentProduct from "./paymentProduct/paymentProduct"
import { useStoreState } from "easy-peasy"
import PayMentCard from "./paymentCard/paymentCard"

const { Container, Typography, Box, Grid, } = require("@mui/material")

const Payment = ({ handleComplete, handlePrevious }) => {
    const {products} = useStoreState(state=>state.paymentProduct)
    const [cardMethod, setCardMethod] = useState('Credit Cart')
    const methods = ['Credit Card', 'Cash on delevary']

    const payablePrice = products.reduce((acc,curr)=>{
        acc += curr.price
        return acc
    },0)

    const handleMethod = (method) => {
        setCardMethod(method)
    }

    return (
        <Container maxWidth='md'>
            <Typography variant="h4" textAlign={'center'}>Payment</Typography>
            <Grid container spacing={4}>
                <Box component={Grid} item md={8} sx={{ margin: '25px,0' }}>
                    <Typography variant="body1" color={'GrayText'} fontSize={15}>Payment Methods</Typography>
                    <Box sx={{ display: 'flex', gap: '2rem', margin: '15px 0' }}>
                        {
                            methods.map(method => <Method key={method} method={method} handleMethod={handleMethod} isChecked={cardMethod} />)
                        }
                    </Box>
                    <PayMentCard handleComplete={handleComplete} handlePrevious={handlePrevious} payablePrice={payablePrice} />
                </Box>
                <Grid item md={4}>
                    <PaymentProduct products={products}/>
                </Grid>
            </Grid>
        </Container>
    )
}




export default Payment