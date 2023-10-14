'use client'
import { Badge, Box, Button, Container, IconButton, Modal, Typography } from '@mui/material';
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';
import { AccountBox, AccountCircle, Add, Cancel, FavoriteBorder, Login, Logout, ProductionQuantityLimits, Reviews, Settings, ShoppingBag, ShoppingBagOutlined } from '@mui/icons-material';
import logo from './logo.png'
import Link from 'next/link';
import useFavoriteCarts from '@/src/hooks/useFavoriteCarts/useFavoriteCarts';
import { useState } from 'react';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { carts, favorites, removeFromCart: cart, removeFromFavorite: favorite } = useFavoriteCarts()




    return (
        <Box sx={{ background: '#DDD' }}>
            <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                <MUILink component={NextLink} href={'/'}>
                    <img style={{ width: '80px', height: '80px' }} src={logo?.src} alt="logo" />
                </MUILink>
                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <MUILink color={'black'} href={'/'} component={NextLink} underline='none' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }}>Home</MUILink>
                    <MUILink color={"black"} component={NextLink} href={'/shop'} underline='none' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }}>Shop</MUILink>
                    <MUILink component={Link} href={'/carts'}>
                        <IconButton>
                            <Badge badgeContent={favorites?.length} color='secondary'>
                                <FavoriteBorder color='black' fontSize='large' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }} />
                            </Badge>
                        </IconButton>
                    </MUILink>
                    <MUILink component={Link} href={'/carts'}>
                        <IconButton>
                            <Badge badgeContent={carts?.length} color='secondary'>
                                <ProductionQuantityLimits color='black' fontSize='large' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }} />
                            </Badge>
                        </IconButton>
                    </MUILink>
                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                        <AccountCircle color='black' fontSize='large' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }} />
                    </IconButton>
                </Box>
                {
                    isOpen && <UserModal />
                }
            </Container>
        </Box>
    );
};


const UserModal = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const handleClose = () => {
        setModalOpen(false)
    }
    return (
        
            <Box component={'div'} sx={{ position: 'absolute', right: '0', top: '5.2rem', border: '1px solid #ddd', padding: '10px', display: 'flex', flexDirection: 'column', gap: '1rem', width: '250px', height: 'auto', backgroundColor: '#f2f2f2', zIndex: '9' }}>
                <Button sx={{ display: 'flex', gap: '2rem', justifyContent: 'left' }}>
                    <Settings />
                    manage User profile
                </Button>
                <Button sx={{ display: 'flex', gap: '2rem', justifyContent: 'left' }}>
                    <Reviews />
                    All Reviews & Rating
                </Button>
                <Button sx={{ display: 'flex', gap: '2rem', justifyContent: 'left' }}>
                    <ShoppingBag />
                    Purchess & Billing
                </Button>
                <Button component={Link} href='/logIn' sx={{ display: 'flex', gap: '2rem', justifyContent: 'left' }}>
                    <Login />
                    login
                </Button>
                <Button sx={{ display: 'flex', gap: '2rem', justifyContent: 'left' }}>
                    <Add />
                    Create Account
                </Button>
                <Button sx={{ display: 'flex', gap: '2rem', justifyContent: 'left' }}>
                    <Logout />
                    LogOut
                </Button>

            </Box>
            
    )
}





export default NavBar;