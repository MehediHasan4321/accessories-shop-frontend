
import useCollection from '@/src/hooks/useCollection/useCollcetion';
import { Box, Container, Typography } from '@mui/material';
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';


const ProductColleciton = () => {
    const {collections,isLoading} = useCollection()
    

    return (
        <Container sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginY:'20px'}}>
            {
               collections?.data.map(item=><Collection key={item.id} collection={item}/>)
            }
        </Container>
    );
};

export default ProductColleciton;



const Collection = ({collection})=>{
    const url = collection?.attributes?.collectionImage?.data?.attributes?.formats?.thumbnail
   
    return (
        <MUILink component={NextLink} href={'/shop'} underline='none' color='black'>
            <Box component={'div'} sx={{width:'200px',height:'200px',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:'10px',cursor:'pointer',"&:hover":{ boxShadow:'-1px 2px 15px 4px rgb(0,0,0,0.2)',transition:'0.3s'}}}>
             <Box component={'div'}>
             <img  src={url?.url} alt="image" style={{width:'150px',height:'150px',objectFit:'cover'}} />
             </Box>
            <Typography variant='h5' align='center'>
                {collection?.attributes?.collectionName}
            </Typography>
        </Box>
        </MUILink>
    )
}