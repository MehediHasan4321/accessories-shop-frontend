import { Box, Typography } from '@mui/material';
import React from 'react';
import Rating from '../rating/Rating';
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';
import Image from 'next/image';


const ProductCart = ({ product }) => {
    const { title, price, rating, image, product_collection } = product.attributes || {}
    
    const url = image?.data?.attributes?.formats?.small?.url
    const collectionName = product_collection?.data?.attributes?.collectionName
    
    return (
        <MUILink href={`/products/${product?.id}`} component={NextLink} underline='none' color='#2f2f2f' >
            <Box component='div' sx={{ width: '270px', height: '370px', borderRadius: '7px', cursor: 'pointer', background: '#ddd', padding: '2px' }}>
                <Image src={url} alt={title} width={270} height={270}/>
                <Box>
                    <Typography variant='body1' textAlign='center'>
                        {title}
                    </Typography>
                    <Typography variant='body1' textAlign={'center'} color="GrayText">
                        {collectionName}
                    </Typography>
                    <Box sx={{ padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='h6'>
                            ${price}
                        </Typography>
                        <Rating num={rating} />
                    </Box>
                </Box>
            </Box>
        </MUILink>
    );
};

export default ProductCart;