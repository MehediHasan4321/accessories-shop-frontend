import { objectToArray } from "@/src/utils/objcetToArray"
import Image from "next/image"

const { Container, Box, Typography } = require("@mui/material")

const PaymentProduct = ({ products }) => {
    const paymentAbleProduct = objectToArray(products)

    return (
        <Container>
            total product found: {paymentAbleProduct.length}
            <Box marginTop={3}>
                {
                    paymentAbleProduct.map(item => <Box key={item.id} component={'div'} display={'flex'} alignItems={'center'} gap={2}>
                        <Image src={item?.img} width={100} height={105} alt={item?.title} />
                        <Box>
                            <Typography variant="h5">${item?.price}</Typography>
                            <Typography>Qtn:{item.qtn}</Typography>
                        </Box>
                    </Box>)
                }
            </Box>
        </Container>
    )
}

export default PaymentProduct