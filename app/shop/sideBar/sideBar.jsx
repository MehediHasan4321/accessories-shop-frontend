import useTopRated from "@/src/hooks/useTopRated/useTopRated"
import { Box, Typography,Slider } from "@mui/material"
import TopRated from "../topRated/topRated"
import { getFromLocalstorage } from "@/src/utils/localstorage/setLocalstorage"
import useCollectonName from "@/src/hooks/useCollectonName/useCollectonName"
import { useStoreState } from "easy-peasy"


const SideBar = ()=>{
  
   const {collection} = useStoreState(state=>state.collection)
   const {subCategorys,isLoading} = useCollectonName(collection)


    return (
        <Box sx={{ width: '350px' }}>
            <Typography variant='h6' textAlign={'center'}>
                {collection}
            </Typography>
            <Box>
                {
                    subCategorys?.map(item => <Box sx={{ width: '100%', marginY: '15px', cursor: 'pointer', padding: '8px', borderRadius: '5px', "&:hover": { backgroundColor: '#f2f2f2' } }} key={item.id}>
                        <Typography sx={{ fontSize: '16px', color: 'gray', }}>{item?.attributes?.subCategoryName}</Typography>
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