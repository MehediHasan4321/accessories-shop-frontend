'use client'

import Address from "@/src/components/checkout/address/address"
import Payment from "@/src/components/checkout/payment/payment"
import ThankYou from "@/src/components/checkout/thankyou/thankYou"
import { useState } from "react"

const { Container, Stepper, Step, StepLabel, Box, Button } = require("@mui/material")

const CheckOut = () => {
    const [active,setActive] = useState(0)
    const steps = ['Add address', 'Payment', 'Thank You','Review product']

    const handleComplete = ()=>{
        setActive(active + 1)
    }

    return (
        <Container maxWidth='lg'>
            <Box sx={{ width: '100%',margin:'2rem 0' }}>
                <Stepper activeStep={active} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Box>
                {
                    active === 0 && <Address handleComplete={handleComplete}/>
                }
                {
                    active === 1 && <Payment handleComplete={handleComplete}/>
                }
                {
                    active === 2 && <ThankYou handleComplete={handleComplete}/>
                }
            </Box>
        </Container>
    )
}


export default CheckOut