'use client'
import Cart from "@/src/components/addToCart/cart/cart"
import IsEmptyCart from "@/src/components/addToCart/isEmpty/isEmpty"
import SubTotal from "@/src/components/addToCart/subTotal/subTotal"
import useFavoriteCarts from "@/src/hooks/useFavoriteCarts/useFavoriteCarts"
import { objectToArray } from "@/src/utils/objcetToArray"
import { Checkbox } from '@mui/material'
import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect, useState } from "react"
const { Container, Typography, Box, IconButton, Grid, Button } = require("@mui/material")

const Carts = () => {
    const { carts: data } = useStoreState(state => state.cart)
    const { addProduct, removeProdcut } = useStoreActions(action => action.paymentProduct)
    const { products } = useStoreState(state => state.paymentProduct)
    const [totalPrice,setTotalPrice] = useState(0)
    const [selectAll, setSelectAll] = useState(false)
    const { removeFromCart } = useFavoriteCarts()
    
    const [depent,setDepent] = useState(0)//no need just for update price when qunatity update 
    const handleDepend = ()=>{
        setDepent(depent + 1)
    }

    useEffect(()=>{
        const payablePrice = objectToArray(products).reduce((acc, curr) => {

            acc = acc += (curr.price * curr.qtn)
    
            return acc
        }, 0)
        setTotalPrice(payablePrice)
    },[depent,products,addProduct,removeProdcut])
    
   

    const handleCancel = id => {
        removeFromCart(id)
        removeProdcut(id)
    }
    const handleSelectAll = (select) => {
        setSelectAll(select)
    }

    const handleAddPaymentProduct = product => {
        addProduct(product)
    }

    const handleRemovePaymentProduct = id => {
        removeProdcut(id)
    }



    return (
        <Container maxWidth='lg'>
            {
                data?.length > 0 && <Grid container spacing={6}>
                    <Grid item lg={8}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ddd', padding: '15px 10px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
                                <Checkbox onClick={() => handleSelectAll(!selectAll)} color="default" checked={selectAll} />
                                <Typography sx={{ userSelect: 'none' }}>Select All Item(s)</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
                                <Typography>Delete All</Typography>
                                <Checkbox color="default" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={8} sx={{ position: 'relative' }}>
                        {
                            data?.map(cart => <Cart  key={cart.id} cart={cart} handleCancel={handleCancel} handleAddPaymentProduct={handleAddPaymentProduct} handleRemovePaymentProduct={handleRemovePaymentProduct} handleDepend={handleDepend} />)
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





export default Carts