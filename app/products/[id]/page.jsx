'use client'
import ContentBox from "@/src/components/productDetails/ContentBox/ContentBox"
import ImageBox from "@/src/components/productDetails/imageBox/ImageBox"
import useProductDetails from "@/src/hooks/useProductDetails/useProductDetails"
const { Container, Box } = require("@mui/material")

const Page = ({ params }) => {

    const { details, isLoading, reviews, images } = useProductDetails(params.id)

    const url = images?.attributes?.url


    return (
        <Container maxWidth='xl'>

            <Box sx={{display:'flex',gap:'2rem'}}>
                <ImageBox image={url} />
                <ContentBox content={details}/>
            </Box>

        </Container>
    )


}

export default Page