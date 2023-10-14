import Link from "next/link"

const { Container, Typography, Box, Button } = require("@mui/material")

const ThankYou = ({handleComplete})=>{
    return (
        <Container maxWidth='md'>
            <Typography variant="h3" textAlign={'center'}>Mehedi Thank You For Pleceing Your Order</Typography>

            <Box>
                <Button component={Link} href="/shop" variant="outlined" >Continue Shopping</Button>
                <Button onClick={handleComplete} variant="outlined">Plz Review This Product</Button>
            </Box>
            
        </Container>
    )
}

export default ThankYou