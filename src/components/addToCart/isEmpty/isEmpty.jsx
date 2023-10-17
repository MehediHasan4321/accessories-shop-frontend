import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"

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

export default IsEmptyCart