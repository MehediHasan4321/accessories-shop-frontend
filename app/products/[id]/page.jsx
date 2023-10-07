'use client'
import useProductDetails from "@/src/hooks/useProductDetails/useProductDetails"
import Provider from "@/src/utils/queryProvider/queryProvider"



const { Container } = require("@mui/material")

const Page = ({ params }) => {

    const { details, isLoading } = useProductDetails(params.id)


    return (
        <Container>

            <h1>router :{JSON.stringify(details)}</h1>

        </Container>
    )


}

export default Page