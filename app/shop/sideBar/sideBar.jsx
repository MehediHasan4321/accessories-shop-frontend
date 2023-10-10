import useTopRated from "@/src/hooks/useTopRated/useTopRated"
import { Box, Typography,Slider } from "@mui/material"
import TopRated from "../topRated/topRated"


const SideBar = ()=>{
   
    const categorys = [
        {
            id: '1',
            name: 'iphone 12',
            quantity: '12'
        },
        {
            id: '2',
            name: 'samsung',
            quantity: '5'
        },
        {
            id: '3',
            name: 'samsung Charger',
            quantity: '5'
        },
        {
            id: '4',
            name: 'Samsung Case',
            quantity: '10'
        },
        {
            id: '5',
            name: 'iphone case',
            quantity: '10'
        }
    ]
    return (
        <Box sx={{ width: '350px' }}>
            <Typography variant='h6' textAlign={'center'}>
                Categorys
            </Typography>
            <Box>
                {
                    categorys.map(item => <Box sx={{ width: '100%', marginY: '15px', cursor: 'pointer', padding: '8px', borderRadius: '5px', "&:hover": { backgroundColor: '#f2f2f2' } }} key={item.id}>
                        <Typography sx={{ fontSize: '16px', color: 'gray', }}>{item.name}</Typography>
                    </Box>)
                }
            </Box>
            <Box sx={{ marginTop: '20px' }}>
                <Typography variant='h5'>Price</Typography>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </Box>
            <TopRated/>
        </Box>
    )
}

export default SideBar