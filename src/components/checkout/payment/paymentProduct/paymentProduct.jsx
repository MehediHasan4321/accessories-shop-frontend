const { Container } = require("@mui/material")

const PaymentProduct = ({products=[]})=>{
    return (
        <Container>
            total product found: {products.length}
        </Container>
    )
}

export default PaymentProduct