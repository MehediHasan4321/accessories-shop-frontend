'use client'
import { Badge, Box, Button, Container, Icon, IconButton, Typography } from '@mui/material';
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';
import { AccountCircle, Cancel, FavoriteBorder, ShoppingBagOutlined } from '@mui/icons-material';
import logo from './logo.png'
import { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Image from 'next/image';
import { setLocalstorage } from '@/src/utils/localstorage/setLocalstorage';
import Link from 'next/link';

const NavBar = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const [favoriteOpen, setFavoiteOpen] = useState(false)
    const { favorite } = useStoreState(state => state.favorite)
    const { carts } = useStoreState(state => state.cart)
    const { removeFromCart } = useStoreActions(action => action.cart)
    const { removeFromFavorite } = useStoreActions(action => action.favorite)



    return (
        <Box sx={{ background: '#DDD' }}>
            <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                <MUILink component={NextLink} href={'/'}>
                    <img style={{ width: '80px', height: '80px' }} src={logo?.src} alt="logo" />
                </MUILink>
                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <MUILink color={'black'} href={'/'} component={NextLink} underline='none' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }}>Home</MUILink>
                    <MUILink color={"black"} component={NextLink} href={'/shop'} underline='none' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }}>Shop</MUILink>
                    <IconButton onClick={() => setFavoiteOpen(!favoriteOpen)}>
                        <Badge badgeContent={favorite?.length} color='secondary'>
                            <FavoriteBorder color='black' fontSize='large' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }} />
                        </Badge>
                    </IconButton>
                    <IconButton onClick={() => setCartOpen(!cartOpen)}>
                        <Badge badgeContent={carts?.length} color='secondary'>
                            <ShoppingBagOutlined color='black' fontSize='large' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }} />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <AccountCircle color='black' fontSize='large' sx={{ cursor: 'pointer', "&:hover": { color: '#2A61B4' } }} />
                    </IconButton>
                </Box>
                {
                    cartOpen && <Carts carts={carts} removeFromCart={removeFromCart} />
                }
                {
                    favoriteOpen && <Favorites favorites={favorite} removeFromFavorite={removeFromFavorite} />
                }
            </Container>
        </Box>
    );
};

//Add to cart items

const Carts = ({ carts, removeFromCart }) => {
    setLocalstorage('carts',carts)
    return (
        <Box component={'div'} sx={{ position: 'absolute', right: '0', top: '5.2rem', border: '1px solid #ddd', padding: '10px', display: 'flex', flexDirection: 'column', gap: '1rem', width: '350px', height: 'auto', backgroundColor: '#f2f2f2', zIndex: '9' }}>
            {
                carts.length === 0 ? <Typography variant='h5' textAlign={'center'}>Plz Add A Cart</Typography> : carts?.map(cart => <Cart key={cart.id} handler={removeFromCart} cart={cart} />)
            }
            {
                carts?.length !==0 && <Link href={'/carts'}><Button variant='outlined'>Go To Cart</Button></Link>
            }
        </Box>
    )
}
//Favorite Items
const Favorites = ({ favorites, removeFromFavorite }) => {
    setLocalstorage('favorites',favorites)
    return (
        <Box component={'div'} sx={{ position: 'absolute', right: '0', top: '5.2rem', border: '1px solid #ddd', padding: '10px', display: 'flex', flexDirection: 'column', gap: '1rem', width: '350px', height: 'auto', backgroundColor: '#f2f2f2', zIndex: '9' }}>
            {
                favorites?.length === 0 ? <Typography variant='h5' textAlign={'center'}>No Fovaite Item</Typography> : favorites.map(item => <Cart key={item.id} handler={removeFromFavorite} cart={item} />)
            }
        </Box>
    )
}


const Cart = ({ cart, handler }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <Image src={cart.img} width={100} height={120} alt={cart.title} />
            <Box>
                <Typography>{cart?.title}</Typography>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant='h4'>${cart?.price*cart?.quantity}</Typography>
                    <Typography variant='h6'>Qtn:{cart?.quantity}</Typography>
                </Box>
            </Box>
            <IconButton onClick={() => handler(cart?.id)} sx={{ height: '30px' }}>
                <Cancel fontSize='small' />
            </IconButton>
        </Box>
    )
}


export default NavBar;