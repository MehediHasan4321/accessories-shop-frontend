import { Box, Typography } from '@mui/material';
import React from 'react';
import Rating from '../../share_component/rating/Rating';

const ContentBox = ({content}) => {
   
    const {title,price,rating,quantity,tags,socialMedia,sub_category,product_collection,ratingCount} = content || {}
    return (
        <Box sx={{margin:'10px'}}>
            <Box>
                <Typography>
                    Rating Counts || {ratingCount} 
                </Typography>
                <Rating num={rating}/>
            </Box>
            <Typography variant='h4'>
                {title}
            </Typography>
            <Typography variant='h5' color={'primary'}>
                ${price.toFixed(2)}
            </Typography>
            <Typography>
               In Stock : {quantity}
            </Typography>
            <Typography>
               Collection : {product_collection?.attributes?.collectionName}
            </Typography>
        </Box>
    );
};

export default ContentBox;