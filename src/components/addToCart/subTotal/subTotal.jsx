import Link from "next/link"

const { Grid, Box, Typography, Button } = require("@mui/material")

const SubTotal = ({ totalPrice }) => {
    return (
        <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '3rem', border: '1px solid #ddd', padding: '1.5rem' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', }}>
                <Typography variant="h5">Total Price:</Typography>
                <Typography variant="h5">${totalPrice.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd' }}>
                <Typography variant="h5">Shipping Cost:</Typography>
                <Typography variant="h5">${5.00}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd' }}>
                <Typography variant="h5">Total Price:</Typography>
                <Typography variant="h5">${(totalPrice + 5).toFixed(2)}</Typography>
            </Box>
            <Button disabled={totalPrice === 0} component={Link} href="/checkout" variant="outlined">PROCEED TO CHECKOUT</Button>
        </Grid>
    )
}

export default SubTotal