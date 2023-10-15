'use client'
import useForm from "@/src/hooks/useForm/useForm"
import { ArrowLeft } from "@mui/icons-material"
import { Box, Button, Checkbox, FormControl, TextField, Typography } from "@mui/material"

const PayMentCard = ({handleComplete,handlePrevious,payablePrice}) => {
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
                <Button onClick={handlePrevious}><ArrowLeft />Back</Button>
                <Button onClick={handleComplete} variant='contained' color='primary'>Purchess ${payablePrice}</Button>
            </Box>
        </FormControl>
    )
}


export default PayMentCard