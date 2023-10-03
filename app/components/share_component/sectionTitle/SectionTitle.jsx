import { Container, Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({ info }) => {

    return (
        <Container maxWidth="xl" sx={{ marginTop: '100px' }}>
            <Typography variant='h4' textAlign='center' sx={{marginBottom:'15px'}}>
                New Arrivals
            </Typography>
            <Typography variant='body2' color='GrayText' textAlign='center'>
                How can you evaluate content without design
            </Typography>
        </Container>
    );
};

export default SectionTitle;