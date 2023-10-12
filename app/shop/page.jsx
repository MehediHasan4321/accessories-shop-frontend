'use client'
import ProductCart from '@/src/components/share_component/productCart/ProductCart';
import useProducts from '@/src/hooks/useProducts/useProducts';
import { Box, Container, } from '@mui/material';
import React from 'react';
import ProductContainer from './productContainer/productContainer';
import SideBar from './sideBar/sideBar';

const Page = () => {
    return (
        <Container maxWidth="xl" sx={{ display: 'flex', gap: "1rem", }}>
            <SideBar />
            <ProductContainer />
        </Container>
    );
};





export default Page


