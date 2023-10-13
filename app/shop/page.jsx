'use client'

import ProductContainer from '@/src/components/shopPage/productContainer/productContainer';
import SideBar from '@/src/components/shopPage/sideBar/sideBar';
import { Container, } from '@mui/material';
import React from 'react';



const Page = () => {
    return (
        <Container maxWidth="xl" sx={{ display: 'flex', gap: "1rem", }}>
            <SideBar />
            <ProductContainer />
        </Container>
    );
};





export default Page


