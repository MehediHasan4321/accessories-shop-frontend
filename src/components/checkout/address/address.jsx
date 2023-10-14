'use client'
const { default: useForm } = require("@/src/hooks/useForm/useForm")
const { FormGroup, Box, TextField, Button } = require("@mui/material")

const Address = ({handleComplete})=>{
    const init = {
        fName:'',
        lName:'',
        email:'',
        phone:'',
        country:'',
        city:'',
        divition:'',
        postCode:'',
        street:''

    }
    const {handleBlure,handleChange,formState,handleSubmit} = useForm(init)
    const style = {
        width:'45%',
        margin:'10px'
    }

    return (
        <FormGroup onSubmit={handleSubmit}>
            <Box>
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value} label='First Name'required placeholder="Enter Your First Name" name="fName" type="text" sx={style}/>
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value} label='Last Name' placeholder="Enter Your Last Name" name="lName" type="text" sx={style}/>
            </Box>
            <Box>
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value}  label='Email' required placeholder="Enter Your Email" name="email" type="emil" sx={style}/>
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value}   label='Phone Number'required placeholder="Enter Your Phone Number" name="phone" type="tel" sx={style}/>
            </Box>
            <Box>
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value} label='Country'required placeholder="Your Country" name="country" type="text" sx={style}/>
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value} label='Divition'required placeholder="Your Divition" name="divition" type="text" sx={style}/>
            </Box>
            <Box>
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value} label='City'required placeholder="Your City Name" name="city" type="text" sx={style}/>
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value} label='Post Code'required placeholder="Your Post Code" name="postCode" type="number" sx={style}/>
            </Box>
            <Box>
                <TextField onChange={handleChange} onBlur={handleBlure} value={formState.value} label='Street'required placeholder="Your Street" name="street" type="text" sx={{...style,width:'92%'}}/>
                
            </Box>
            <Box>
                <Button type="submit" onClick={handleComplete} variant="outlined">Add Address</Button>
            </Box>
        </FormGroup>
    )
}

export default Address