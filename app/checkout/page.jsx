'use client'

import Address from "@/src/components/checkout/address/address"
import Payment from "@/src/components/checkout/payment/payment"
import Review from "@/src/components/checkout/reviews/reviews"
import ThankYou from "@/src/components/checkout/thankyou/thankYou"
import { useState } from "react"

const { Container, Stepper, Step, StepLabel, Box, Button } = require("@mui/material")

const CheckOut = () => {
    const [active,setActive] = useState(0)
    const steps = ['Add address', 'Payment', 'Thank You','Review product']

    const handleComplete = ()=>{
        setActive(active + 1)
    }
    const handlePrevious = ()=>{
        setActive(active -1)
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
                    active === 0 && <Address handleComplete={handleComplete} handlePrevious={handlePrevious}/>
                }
                {
                    active === 1 && <Payment handleComplete={handleComplete} handlePrevious={handlePrevious}/>
                }
                {
                    active === 2 && <ThankYou handleComplete={handleComplete} handlePrevious={handlePrevious}/>
                }
                {
                    active === 3 && <Review handleComlete={handleComplete} handlePrevious={handlePrevious}/>
                }
            </Box>
        </Container>
    )
}


export default CheckOut