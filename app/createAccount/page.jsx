'use client'
import useForm from "@/src/hooks/useForm/useForm"
import Link from "next/link"

const { Container, Box, Typography, FormControl, Button, TextField } = require("@mui/material")

const CreateAccoutn = () => {
    const init = {
        name: '',
        email: '',
        password: ''
    }
    const { handleChange, handleSubmit, formState,handleBlure, } = useForm(init)
    return (
        <Container maxWidth='md' sx={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Typography variant="h5" textAlign={'center'}>
                    Create A New Your Account
                </Typography>
                <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <Box>
                        <TextField value={formState.value} onChange={handleChange} onBlur={handleBlure} placeholder="Enter You Name" name="name" label='Your Name' type="text" sx={{ width: '350px' }} />
                    </Box>
                    <Box>
                        <TextField value={formState.value} onChange={handleChange} onBlur={handleBlure} placeholder="Enter You Email" name="email" label='Your Email' type="email" sx={{ width: '350px' }} />
                    </Box>
                    <Box>
                        <TextField value={formState.value} onChange={handleChange} onBlur={handleBlure} placeholder="Your Password" name="password" label='Password' type="password" sx={{ width: '350px' }} />
                    </Box>
                    <Box>
                        <Button onSubmit={handleSubmit} type="submit" variant="outlined" sx={{ width: '350px' }}>Create Account</Button>
                    </Box>
                </FormControl>
                <Box>
                    <Typography>
                        Already have an Account? <Link href={'/logIn'}>Login</Link>
                    </Typography>
                </Box>
                <Box>
                    <Button variant="outlined" sx={{ width: '350px', }}>Countinue With Google</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default CreateAccoutn