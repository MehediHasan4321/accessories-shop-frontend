'use client'
import SubTotal from "@/src/components/addToCart/subTotal/subTotal"
import IncDecBtn from "@/src/components/share_component/incDecBtn/incDecBtn"
import useFavoriteCarts from "@/src/hooks/useFavoriteCarts/useFavoriteCarts"
import { Cancel } from "@mui/icons-material"
import { Checkbox } from '@mui/material'
import { useStoreState } from "easy-peasy"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const { Container, Typography, Box, IconButton, Grid, Button } = require("@mui/material")

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
            {
                data?.length > 0 && <Grid container spacing={6}>
                    <Grid item lg={8}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ddd', padding: '15px 10px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
                                <Checkbox color="default" />
                                <Typography>Select All Item(s)</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
                                <Typography>Delete All</Typography>
                                <Checkbox color="default" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={8} sx={{ position: 'relative' }}>
                        {
                            data?.map(cart => <Cart key={cart.id} cart={cart} handleCancel={handleCancel} />)
                        }
                        <Box sx={{ position: 'absolute', right: '2rem', marginTop: '2rem' }}>
                            <Typography variant="h5" color={'black'}>Total Price: ${totalPrice}</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={4}>
                        <SubTotal totalPrice={totalPrice} />
                    </Grid>
                </Grid>
            }
            {
                data?.length === 0 && <IsEmptyCart />
            }
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
            <Checkbox defaultChecked color="default"/>
            <Image src={img} alt={title} width={80} height={80} />
            <Box component={'div'} >
                <Typography sx={{ fontSize: '18px' }} maxWidth={250}>
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


const IsEmptyCart = () => {
    return (
        <Box sx={{ width: '100%', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
                <Typography color={'GrayText'} sx={{ fontSize: '16px', marginBottom: '15px' }}>There are no items in this cart</Typography>
                <Button component={Link} href="/shop" variant="outlined">Countinue shopping</Button>
            </Box>
        </Box>
    )
}


export default Carts