'use client'
import { Box, Container, Typography } from '@mui/material';
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';
import {  AccountCircle, FavoriteBorder, ShoppingBagOutlined } from '@mui/icons-material';
import logo from './logo.png'

const NavBar = () => {
    
    return (
        <Box sx={{ background: '#F4ACB7' }}>
            <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box component='div'>
                    <img style={{width:'80px',height:'80px'}} src={logo?.src} alt="logo" />
                </Box>
                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <MUILink color={'black'} href={'/'} component={NextLink} underline='none' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }}>Home</MUILink>
                    <MUILink color={"black"} component={NextLink} href={'/shop'} underline='none' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }}>Shop</MUILink>
                    <FavoriteBorder color='black' fontSize='large' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }} />
                    <ShoppingBagOutlined color='black' fontSize='large' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }} />
                    <AccountCircle color='black' fontSize='large' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }} />
                </Box>
            </Container>
        </Box>
    );
};

export default NavBar;