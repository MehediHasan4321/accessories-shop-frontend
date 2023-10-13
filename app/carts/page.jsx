'use client'
import SubTotal from "@/src/components/addToCart/subTotal/subTotal"
import IncDecBtn from "@/src/components/share_component/incDecBtn/incDecBtn"
import useFavoriteCarts from "@/src/hooks/useFavoriteCarts/useFavoriteCarts"
import { Cancel } from "@mui/icons-material"
import { useStoreState } from "easy-peasy"
import Image from "next/image"
import { useState } from "react"

const { Container, Typography, Box, IconButton, Grid } = require("@mui/material")

const Carts = () => {
    const { carts: data } = useStoreState(state => state.cart)
    const { removeFromCart } = useFavoriteCarts()
    const totalPrice = data.reduce((acc, curr) => {

        acc = acc += curr.price

        return acc
    }, 0)
    const handleCancel = id => {
        removeFromCart(id)
    }
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={6}>
                <Grid item lg={8} sx={{ position: 'relative' }}>
                    {
                        data?.length === 0 && <Typography variant="h4" textAlign={'center'} sx={{ marginTop: '3rem' }}>You have not a product</Typography>
                    }
                    {
                        data?.map(cart => <Cart key={cart.id} cart={cart} handleCancel={handleCancel} />)
                    }
                    {
                        data?.length > 0 && <Box sx={{ position: 'absolute', right: '2rem', marginTop: '2rem' }}>
                            <Typography variant="h5" color={'black'}>Total Price: ${totalPrice}</Typography>
                        </Box>
                    }
                </Grid>
                <Grid item lg={4}>
                    <SubTotal totalPrice={totalPrice} />
                </Grid>
            </Grid>
        </Container >
    )
}


const Cart = ({ cart, handleCancel }) => {
    const { img, title, price, quantity, id } = cart
    const [qtn, setQtn] = useState(quantity)
    const handleQuantity = (qtn) => {
        setQtn(qtn)
    }



    return (
        <Box component={'div'} sx={{ display: 'flex', gap: '2rem', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', marginTop: '1rem' }}>
            <Image src={img} alt={title} width={100} height={110} />
            <Box component={'div'} >
                <Typography sx={{fontSize:'18px'}} maxWidth={250}>
                    {title}
                </Typography>
                
            </Box>
            <Typography variant="h5" color='black'>
                    Price: ${price * qtn}
                </Typography>
            <IncDecBtn handleQuantity={handleQuantity} defaultQuantity={quantity} />
            <IconButton onClick={() => handleCancel(id)}>
                <Cancel />
            </IconButton>
        </Box>
    )
}


export default Carts