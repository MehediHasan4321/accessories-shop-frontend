'use client'
import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

const HomeBanner = () => {
    const info = {
        id: '1',
        image: 'https://woodmartcdn-cec2.kxcdn.com/accessories/wp-content/uploads/sites/7/2022/04/w-accessories-slider.jpg',
        title: 'Change Your Phone Safety',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.'
    }
    return (
        <section style={{ backgroundImage: `url(${info.image})`, width: '100%', height: '70vh', backgroundRepeat: 'no-repeat' }}>
            <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '70vh' }}>
                <Box component='div' sx={{ width: '40%',display:'flex',flexDirection:'column',gap:'2rem' }}>
                    <Typography variant='h2'>
                        {info.title}
                    </Typography>
                    <Typography variant='body' color='gray'>
                        {info.description}
                    </Typography>
                    <Box>
                        <Button variant='contained' sx={{marginRight:'25px'}}>To shop</Button>
                        <Button variant='outlined'>Read More</Button>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};

export default HomeBanner;