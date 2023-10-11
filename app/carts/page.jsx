'use client'
import IncDecBtn from "@/src/components/share_component/incDecBtn/incDecBtn"
import { getFromLocalstorage } from "@/src/utils/localstorage/setLocalstorage"
import { Cancel } from "@mui/icons-material"
import Image from "next/image"
import { useState } from "react"

const { Container, Typography, Box, IconButton } = require("@mui/material")

const Carts = ()=>{
    const data = getFromLocalstorage('carts')
   
    return(
        <Container>
            <Box component={'div'}>
                {
                    data?.map(cart=><Cart key={cart.id} cart={cart}/>)
                }
            </Box>
        </Container>
    )
}


const Cart = ({cart})=>{
    const {img,title,price,quantity} = cart
    const [qtn,setQtn]  = useState(quantity)
    const handleQuantity = (qtn)=>{
        setQtn(qtn)
    }
    return(
        <Box component={'div'} sx={{display:'flex',gap:'1rem',justifyContent:'space-around',alignItems:'center',border:'1px solid #ddd'}}>
            <Image src={img} alt={title} width={150} height={170}/>
            <Box component={'div'} >
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography variant="h5">
                    ${price*qtn}
                </Typography>
            </Box>
            <IncDecBtn handleQuantity={handleQuantity} defaultQuantity={quantity}/>
            <IconButton>
                <Cancel/>
            </IconButton>
        </Box>
    )
}


export default Carts