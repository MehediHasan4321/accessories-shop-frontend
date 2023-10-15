const { Container, Typography, Button } = require("@mui/material")

const Review = ({handleComlete,handlePrevious})=>{
    return(
        <Container>
            <Typography variant="h2" textAlign={'center'}>Review Product</Typography>
            <Button onClick={handlePrevious} variant="outlined">Back</Button>
        </Container>
    )
}

export default Review