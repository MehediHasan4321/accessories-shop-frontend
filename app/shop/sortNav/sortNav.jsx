import { Box, Input } from "@mui/material"

const SortNav = ()=>{
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px 20px',margin:'20px 0' }}>
            <Input type='text' sx={{width:'300px'}} placeholder='Search Product' />
            <select>
                <option>Pirce</option>
            </select>
        </Box>
    )
}

export default SortNav