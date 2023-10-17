'use client' 
import { Box, Checkbox, IconButton, Typography, } from "@mui/material"
import IncDecBtn from "../../share_component/incDecBtn/incDecBtn"
import { Cancel } from "@mui/icons-material"
import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect, useState } from "react"
import Image from "next/image"

const Cart = ({ cart, handleCancel,handleAddPaymentProduct:add,handleRemovePaymentProduct:remove,handleDepend}) => {
    const { img, title, price, quantity, id } = cart
    const {products} = useStoreState(state=>state.paymentProduct)
    const {addProduct} = useStoreActions(action=>action.paymentProduct)
    const [qtn, setQtn] = useState(quantity)
    const [isSelect,setIsSelect] = useState(false)

    const handleQuantity = (qtn) => {
        handleDepend()
        setQtn(qtn)
        const sameproduct = products[id]
        if(sameproduct){
            sameproduct.qtn = qtn
            addProduct(sameproduct);
            
        }
        
    }

    
    const paymentAbleProduct = {id,title,price,qtn,img}

    const handleSelect = (product)=>{
        setIsSelect(!isSelect)
        if(!isSelect){
            add(product)
        }else{
            remove(id)
        }
    }

    return (
        <Box component={'div'} sx={{ display: 'flex', gap: '2rem', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', marginTop: '1rem' }}>
            <Checkbox onClick={()=>handleSelect(paymentAbleProduct)} checked={isSelect || products[id]} color="default"/>

            <Image src={img} alt={title} width={80} height={80} />
            <Box component={'div'} >
                <Typography sx={{ fontSize: '18px' }} maxWidth={250}>
                    {title}
                </Typography>

            </Box>
            <Typography variant="h5" color='black'>
                ${price * qtn}
            </Typography>
            <IncDecBtn handleQuantity={handleQuantity} defaultQuantity={quantity} />
            <IconButton onClick={() => handleCancel(id)}>
                <Cancel />
            </IconButton>
        </Box>
    )
}

export default Cart