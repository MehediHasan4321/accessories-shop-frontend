'use client'
import { FavoriteBorder } from "@mui/icons-material";
import IncDecBtn from "../../share_component/incDecBtn/incDecBtn"
import SocialIconBox from "../socialIconBox/SocialIconBox";
import { useStoreActions } from "easy-peasy";
import { useState } from "react";

const { Box, Button, Typography } = require("@mui/material")


const ProductAciton = ({ socialMedia,item }) => {
    const [product,setProduct] = useState(item)
const {addToFavorte} = useStoreActions(acton=>acton.favorite)
const {addToCart} = useStoreActions(action=>action.cart)
const handleQuantity = (num)=>{
    setProduct(prev=>(
        {
            ...prev,
            quantity:num
        }
    ))
}


    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <IncDecBtn handleQuantity={handleQuantity} />
                <Button onClick={()=>addToCart(product)} variant="contained" sx={{ width: '200px', fontWeight: '700' }}>Add To Cart</Button>
                <Button variant="outlined" sx={{ width: '200px', fontWeight: '700' }} >Buy Now</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <Box onClick={()=>addToFavorte(product)} component={Button}>
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