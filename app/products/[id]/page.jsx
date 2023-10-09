'use client'
import ContentBox from "@/src/components/productDetails/ContentBox/ContentBox"
import ImageBox from "@/src/components/productDetails/imageBox/ImageBox"
import ProductDescription from "@/src/components/productDetails/productDecription/productDescription"
import useProductDetails from "@/src/hooks/useProductDetails/useProductDetails"
const { Container, Box, Typography } = require("@mui/material")

const Page = ({ params }) => {

    const { details, isLoading, reviews, images,description } = useProductDetails(params.id)

    const url = images?.attributes?.url


    return (
        <Container maxWidth='xl'>

            <Box sx={{display:'flex',gap:'2rem'}}>
                <ImageBox image={url} />
                <ContentBox content={details}/>
            </Box>
            <ProductDescription description={description} reviews = {reviews} isLoading={isLoading} />
        </Container>
    )


}

export default Page