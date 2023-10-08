import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ImageBox = ({ image }) => {
    return (
        <Box component={'div'} sx={{ display: 'flex',margin:'10px' }}>
            <Box sx={{ width: '150px' }}>
                <Box sx={{ border: '1px solid #ddd', width: '100px', margin: '10px' }}>
                    <Image src={image}
                        alt='product image'
                        width={100}
                        height={100}
                    />
                </Box>
                <Box sx={{ border: '1px solid #ddd', width: '100px', margin: '10px' }}>
                    <Image src={image}
                        alt='product image'
                        width={100}
                        height={100}
                    />
                </Box>
                <Box sx={{ border: '1px solid #ddd', width: '100px', margin: '10px' }}>
                    <Image src={image}
                        alt='product image'
                        width={100}
                        height={100}
                    />
                </Box>
            </Box>
            <Box sx={{border:'1px solid #ddd'}}>
            <Image src={image}
                alt='product image'
                width={450}
                height={480}
            />
            </Box>
        </Box>
    );
};

export default ImageBox;
