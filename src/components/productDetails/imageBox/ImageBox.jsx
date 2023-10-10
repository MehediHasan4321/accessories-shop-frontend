'use client'
import { Box } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

const ImageBox = ({ images }) => {
    const [state,setState] = useState(0)
    const mainImg = images[state]?.attributes?.formats?.medium?.url
    return (
        <Box component={'div'} sx={{ display: 'flex', margin: '10px' }}>
            <Box sx={{ width: '150px' }}>
                {
                    images.map((img,index) => {
                        const url = img?.attributes?.formats?.small?.url
                        return <Box component={'div'} onClick={()=>setState(index)}  key={img.id} sx={{ border: '1px solid #ddd', width: '100px', margin: '10px',cursor:'pointer',borderRadius:'5px',"&:hover":{ boxShadow:'-1px 2px 15px 4px rgb(0,0,0,0.2)',transition:'0.3s'} }}>
                            <Image src={url}
                                alt='product image'
                                width={100}
                                height={100}
                            />
                        </Box>
                    })
                }
            </Box>
            <Box sx={{ border: '1px solid #ddd' }}>
                <Image src={mainImg}
                    alt='product image'
                    width={450}
                    height={480}
                />
            </Box>
        </Box>
    );
};

export default ImageBox;
