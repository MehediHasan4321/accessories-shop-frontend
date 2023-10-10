import { Box, Rating, Typography } from '@mui/material';
import React from 'react';
import ProductAciton from '../productAction/productAciton';
import TagBox from '../tagBox/tagBox';

const ContentBox = ({content,img,id}) => {
   
    const {title,price,rating,quantity,tags,socialMedia,product_collection,ratingCount} = content || {}
    const item= {
        title,
        price,
        img,
        id,
    }
    return (
        <Box sx={{margin:'10px',display:'flex',flexDirection:'column',gap:'1rem'}}>
            <Box>
                <Typography>
                    Rating Counts || {ratingCount} 
                </Typography>
                <Rating value={rating/ratingCount} readOnly/>
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
            <ProductAciton socialMedia={socialMedia} item={item}/>
            <Box sx={{display:'flex',alignItems:'center',gap:'1rem'}}>
                <Typography variant='h6'>
                    Tags:
                </Typography>
                <TagBox tags={tags}/>
            </Box>
        </Box>
    );
};

export default ContentBox;