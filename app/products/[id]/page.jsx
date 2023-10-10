'use client'
import PopularProducts from "@/src/components/homePage/popularProducts/PopularProducts"
import ContentBox from "@/src/components/productDetails/ContentBox/ContentBox"
import ImageBox from "@/src/components/productDetails/imageBox/ImageBox"
import ProductDescription from "@/src/components/productDetails/productDecription/productDescription"
import useProductDetails from "@/src/hooks/useProductDetails/useProductDetails"
const { Container, Box, Typography } = require("@mui/material")

const Page = ({ params }) => {
    const id = params?.id
    
    const { details, isLoading, reviews, images, description } = useProductDetails(id)

    return (
        <Container maxWidth='xl'>

            <Box sx={{ display: 'flex', gap: '2rem' }}>
                <ImageBox images={images} />
                <ContentBox content={details} />
            </Box>
            <ProductDescription description={description} reviews={reviews} isLoading={isLoading} />
            <PopularProducts />
        </Container>
    )


}

export default Page