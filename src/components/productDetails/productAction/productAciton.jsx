'use client'
import { FavoriteBorder } from "@mui/icons-material";
import IncDecBtn from "../../share_component/incDecBtn/incDecBtn"
import SocialIconBox from "../socialIconBox/SocialIconBox";
import { useState } from "react";
import useFavoriteCarts from "@/src/hooks/useFavoriteCarts/useFavoriteCarts";
const { Box, Button, Typography } = require("@mui/material")
import useLocalStorage from "@/src/hooks/useLocalStorage/useLocalStorage";
import { useStoreState } from "easy-peasy";

const ProductAciton = ({ socialMedia, item }) => {
    const [quantity, setQuantity] = useState(1)
    const { storeFavarite, storeCarts } = useFavoriteCarts()
    const { saveToLocalStorage } = useLocalStorage()
    const { cart, favorite } = useStoreState(state => state)
   
    
    const handleQuantity = (num) => {
        setQuantity(num)
    }

    saveToLocalStorage('cart',cart.carts)

    const handleAddCart = () => {
        const product = { ...item, quantity }
        storeCarts(product)
        
    }

    saveToLocalStorage('favorite',favorite.favorite)
    const handleFavorite = () => {
        const product = { ...item, quantity }
        storeFavarite(product)

    }
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <IncDecBtn handleQuantity={handleQuantity} />
                <Button onClick={handleAddCart} variant="contained" sx={{ width: '200px', fontWeight: '700' }}>Add To Cart</Button>
                <Button variant="outlined" sx={{ width: '200px', fontWeight: '700' }} >Buy Now</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <Box onClick={handleFavorite} component={Button}>
                    <FavoriteBorder />
                    <Typography sx={{ fontWeight: '700', fontSize: '15px', color: 'GrayText' }}>Add to Wishlist</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: '700', fontSize: '15px', color: 'GrayText' }}>Share: </Typography>
                    <SocialIconBox socialMedia={socialMedia} />
                </Box>
            </Box>

        </Box>
    )
}

export default ProductAciton