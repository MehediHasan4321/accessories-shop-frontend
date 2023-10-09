'use client'

import { Verified } from "@mui/icons-material"
import { useState } from "react"
import TakeReview from "../takeReview/takeReview"

const { Container, Box, Button, Typography, Rating } = require("@mui/material")

const ProductDescription = ({ description, reviews, isLoading, features }) => {
    const [state, setState] = useState('reviews')
    return (
        <Container sx={{ marginTop: '100px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                <Button onClick={() => setState('description')} variant={state === 'description' ? 'contained' : 'outlined'} sx={{ width: '150px', fontWeight: '700' }}>Description</Button>
                <Button onClick={() => setState('reviews')} variant={state === 'reviews' ? 'contained' : 'outlined'} sx={{ width: '150px', fontWeight: '700' }}>Review</Button>
                <Button onClick={() => setState('features')} variant={state === 'features' ? 'contained' : 'outlined'} sx={{ width: '150px', fontWeight: '700' }}>Features</Button>
            </Box>
            
            <Box sx={{ marginTop: '50px' }}>
                {state === 'description' && <Typography color={'GrayText'}>{description ? description : 'Description not found'}</Typography>}
                {state === 'reviews' && <ReviewBox reviews={reviews} />}
                {state === 'features' && <Typography color={'GrayText'}>{features ? features : 'features not found'}</Typography>}
            </Box>

        </Container>
    )
}



const ReviewBox = ({ reviews }) => {

    return (
        <Box>
            <TakeReview/>
            {/* <hr style={{borderBottom:'1px solid #ddd',margin:'15px 0'}}/> */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {reviews.map(review => <Review key={review.id} review={review} />)}
            </Box>
        </Box>
    )
}

const Review = ({ review }) => {

    const { review: customerReview, rating } = review?.attributes

    return (
        <Box>
            <Box>
                <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                    <img style={{ width: '50px' }} src="https://www.shareicon.net/data/256x256/2016/02/25/724703_people_512x512.png" alt="user" />
                    <Box>
                        <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                            <Verified fontSize="small" sx={{ color: '#08C1FF' }} />
                            <Typography>Verified Puschase</Typography>
                        </Box>
                        <Rating value={rating} readOnly size="small" />
                    </Box>
                </Box>
                <Typography variant="body2" sx={{ marginTop: '15px' }}>
                    {customerReview}
                </Typography>
            </Box>
        </Box>
    )
}



export default ProductDescription