'use client'
import ProductCart from '@/src/components/share_component/productCart/ProductCart';
import useProducts from '@/src/hooks/useProducts/useProducts';
import { Box, Container, Grid, Input, Slider, Typography, } from '@mui/material';
import React from 'react';

const Page = () => {
    return (
        <Container maxWidth="xl" sx={{ display: 'flex', gap: "1rem", }}>
            <SideBar />
            <ProductContiner />
        </Container>
    );
};

const categorys = [
    {
        id: '1',
        name: 'iphone 12',
        quantity: '12'
    },
    {
        id: '2',
        name: 'samsung',
        quantity: '5'
    },
    {
        id: '3',
        name: 'samsung Charger',
        quantity: '5'
    },
    {
        id: '4',
        name: 'Samsung Case',
        quantity: '10'
    },
    {
        id: '5',
        name: 'iphone case',
        quantity: '10'
    }
]

const SideBar = () => {
    return (
        <Box sx={{ width: '350px' }}>
            <Typography variant='h6' textAlign={'center'}>
                Categorys
            </Typography>
            <Box>
                {
                    categorys.map(item => <Box sx={{ width: '100%', marginY: '15px', cursor: 'pointer', padding: '8px', borderRadius: '5px', "&:hover": { backgroundColor: '#f2f2f2' } }} key={item.id}>
                        <Typography sx={{ fontSize: '16px', color: 'gray', }}>{item.name}</Typography>
                    </Box>)
                }
            </Box>
            <Box sx={{ marginTop: '20px' }}>
                <Typography variant='h5'>Price</Typography>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </Box>
        </Box>
    )
}

const ProductContiner = () => {
    const { products, isLoading } = useProducts()

    return (
        <Box sx={{ width: '100%' }}>
            <SortNav />
            <Grid container sx={{margin:'2rem'}} >
                {
                    products?.data.map((product,index) => <Grid key={product.id} xl={3} marginBottom={5}>
                            <ProductCart product={product}/>
                    </Grid>)
                }
            </Grid>
        </Box>
    )
}


const SortNav = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px 20px',margin:'20px 0' }}>
            <Input type='text' sx={{width:'300px'}} placeholder='Search Product' />
            <select>
                <option>Pirce</option>
            </select>
        </Box>
    )
}



export default Page


