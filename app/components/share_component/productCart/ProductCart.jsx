import { Box, Typography } from '@mui/material';
import React from 'react';

const ProductCart = ({ product }) => {
    const { title, price, rating, image, product_collection, } = product.attributes || {}
    const url = image?.data?.attributes?.formats?.small?.url
    const collectionName = product_collection?.data?.attributes?.collectionName
    return (
        <Box component='div' sx={{ width: '270px', height: '370px', borderRadius: '7px', border: '1px solid black' }}>
            <img src={url} alt={title} style={{ width: '100%', height: '70%' }} />
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
                    <Typography>
                        {rating}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductCart;