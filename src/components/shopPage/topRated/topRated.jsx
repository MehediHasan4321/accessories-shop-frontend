import useTopRated from "@/src/hooks/useTopRated/useTopRated"
import { Box, Rating, Typography } from "@mui/material"
import Image from "next/image"
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material'
const TopRated = () => {
    const { topRated,isLoading } = useTopRated()

    if(isLoading){
        return(
            <Typography variant="h4" textAlign={'center'}>
                Loading .....
            </Typography>
        )
    }else{
        return (
            <>
                <Typography variant="h5" sx={{margin:'20px 0'}}> 
                    Top Rated 
                </Typography>
                <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {
                        topRated?.map(item => <Product key={item.id} product={item} id={item.id} />)
                    }
                </Box>
            </>
        )
    }
}


const Product = ({ product, id }) => {
    const data = product?.attributes
    const url = data?.image?.data[0]?.attributes?.formats?.small?.url

    return (
        <MUILink component={NextLink} href={`/products/${id}`} underline="none" color={'black'} sx={{ display: 'flex', gap: '0.3rem', alignItems: 'center', cursor: 'pointer' }}>
            <Image src={url} height={120} width={100} />
            <Box>
                <Typography>
                    {data?.title?.length > 20 ? `${data?.title.slice(0, 20)}...` : data?.title}
                </Typography>
                <Typography variant="h6" color={'primary'}>
                    ${data?.price}
                </Typography>
                <Rating value={4.5} readOnly size="small" />
            </Box>
        </MUILink>
    )
}


export default TopRated