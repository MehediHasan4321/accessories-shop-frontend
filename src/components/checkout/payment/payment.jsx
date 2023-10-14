'use client'

import useForm from "@/src/hooks/useForm/useForm"
import { ArrowLeft } from "@mui/icons-material"
import { useState } from "react"

const { Container, Typography, Box, Radio, FormControl, TextField, Checkbox, Button } = require("@mui/material")

const Payment = ({ handleComplete }) => {
    const methods = ['Credit Card', 'Cash on delevary']
    const [cardMethod, setCardMethod] = useState('Credit Cart')

    const handleMethod = (method) => {
        setCardMethod(method)
    }

    return (
        <Container maxWidth='md'>
            <Typography variant="h4" textAlign={'center'}>Payment</Typography>
            <Box sx={{ margin: '25px,0' }}>
                <Typography variant="body1" color={'GrayText'} fontSize={15}>Payment Methods</Typography>
                <Box sx={{ display: 'flex', gap: '2rem', margin: '15px 0' }}>
                    {
                        methods.map(method => <Method key={method} method={method} handleMethod={handleMethod} isChecked={cardMethod} />)
                    }
                </Box>
                <Card handleComplete={handleComplete} />
            </Box>

        </Container>
    )
}

const Method = ({ method, isChecked, handleMethod }) => {

    return (
        <Box component={'div'} onClick={() => handleMethod(method)} sx={{ width: '220px', height: '70px', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <Radio checked={method === isChecked} name={method} />
            <Typography sx={{ userSelect: 'none' }}>{method}</Typography>
        </Box>
    )
}

const Card = ({handleComplete}) => {
    const init = { cardNumber: '', expireDate: '', cardCVV: '', cardHolderName: '' }
    const { handleChange, formState, handleBlure, handleSubmit } = useForm(init)
    return (
        <FormControl sx={{ width: '475px' }}>
            <Box marginTop={2}>
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value} type="number" required placeholder="Your Card Number" label='Card Number' sx={{ width: '100%' }} />
            </Box>
            <Box marginTop={2}>
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value} placeholder="Card Holder Name" label='Card Holder Name' sx={{ width: '100%' }} type="text" />
            </Box>
            <Box marginTop={2}>
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value} required placeholder="Card Expire Data" sx={{ width: '50%' }} type="date" />
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value} required placeholder="CVV Code" label='CVV Code' sx={{ width: '50%' }} type="number" />
            </Box>
            <Box marginTop={2} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                <Checkbox />
                <Typography variant="body1" fontSize={15} color={'GrayText'}>Save My Card For Future</Typography>
            </Box>
            <Box marginTop={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
                <Button><ArrowLeft />Back</Button>
                <Button onClick={handleComplete} variant='contained' color='primary'>Pay</Button>
            </Box>
        </FormControl>
    )
}

export default Payment