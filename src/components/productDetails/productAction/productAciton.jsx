import { FavoriteBorder } from "@mui/icons-material";
import IncDecBtn from "../../share_component/incDecBtn/incDecBtn"
import SocialIconBox from "../socialIconBox/SocialIconBox";
import { useStoreActions, useStoreState } from "easy-peasy";

const { Box, Button, Typography } = require("@mui/material")


const ProductAciton = ({ socialMedia,item }) => {

const {addToFavorte} = useStoreActions(acton=>acton.favorite)
const {addToCart} = useStoreActions(action=>action.cart)

    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <IncDecBtn />
                <Button onClick={()=>addToCart(item)} variant="contained" sx={{ width: '200px', fontWeight: '700' }}>Add To Cart</Button>
                <Button variant="outlined" sx={{ width: '200px', fontWeight: '700' }} >Buy Now</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <Box onClick={()=>addToFavorte(item)} component={Button}>
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