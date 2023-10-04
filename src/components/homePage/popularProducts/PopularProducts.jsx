'use client'
import { Box, Container } from '@mui/material';
import React from 'react';
import ProductCart from '../../share_component/productCart/ProductCart';
import SectionTitle from '../../share_component/sectionTitle/SectionTitle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import useProducts from '@/src/hooks/useProducts/useProducts';

const PopularProducts = () => {
    const { products } = useProducts()
    const info = {
        title: 'Most Popular Products',
        description: 'Proponents of content strategy may shun of dummy copy designers'
    }
    const settings = {
        dots: true,
        infinite: true,
        speed:1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000
    }
    const popular = products?.data.length > 6 ? products?.data?.slice(0, 6) : products?.data
    return (
        <Container maxWidth='xl'>
            <SectionTitle info={info} />

            <Slider {...settings}>
                {
                    popular?.map(product => <ProductCart key={product.id} product={product} />)
                }
            </Slider>

        </Container>
    );
};

export default PopularProducts;