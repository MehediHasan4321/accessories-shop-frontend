'use client'
import useForm from "@/src/hooks/useForm/useForm"
import Link from "next/link"

const { Container, Input, TextField, Box, Button, Typography, FormControl } = require("@mui/material")

const Login = () => {
    const init = {
        email: '',
        password: ''
    }
    
    const { handleChange, handleSubmit, formState } = useForm(init)

    
    return (
        <Container maxWidth='md' sx={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Typography variant="h5" textAlign={'center'}>
                    Sign In Your Account
                </Typography>
                <FormControl onSubmit={handleSubmit} sx={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
                    <Box>
                        <TextField value={formState.value} onChange={handleChange} placeholder="Enter You Email" name="email" label='Your Email' type="email" sx={{ width: '350px' }} />
                    </Box>
                    <Box>
                        <TextField value={formState.value} onChange={handleChange} placeholder="Your Password" name="password" label='Password' type="password" sx={{ width: '350px' }} />
                    </Box>
                    <Box>
                        <Button type="submit" variant="outlined" sx={{ width: '350px' }}>Sign In</Button>
                    </Box>
                </FormControl>
                <Box>
                    <Typography>
                        Don't have an Account? <Link href={'/createAccount'}>Create Account</Link>
                    </Typography>
                </Box>
                <Box>
                    <Button variant="outlined" sx={{ width: '350px', }}>Countinue With Google</Button>
                </Box>
            </Box>
        </Container>
    )
}


export default Login