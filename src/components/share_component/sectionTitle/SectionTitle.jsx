import { Container, Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({ info }) => {

    return (
        <Container maxWidth="xl" sx={{ marginTop: '100px',marginBottom:'50px' }}>
            <Typography variant='h4' textAlign='center' sx={{marginBottom:'15px'}}>
                {info?.title}
            </Typography>
            <Typography variant='body2' color='GrayText' textAlign='center'>
                {info?.description}
            </Typography>
        </Container>
    );
};

export default SectionTitle;