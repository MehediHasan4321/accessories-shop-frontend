import useProducts from '@/app/hooks/useProducts/useProducts';
import SectionTitle from '../../share_component/sectionTitle/SectionTitle';
import { Container } from '@mui/material';
import ProductCart from '../../share_component/productCart/ProductCart';

const NewArival = () => {
    const {products} = useProducts()
    
    return(
        <>
        <SectionTitle/>
        <Container maxWidth='xl' sx={{display:'flex',gap:'2rem',flexWrap:'wrap',marginTop:'60px'}}>
            {
                products?.data.map(product=><ProductCart product={product} key={product.id}/>)
            }
        </Container>
        </>
    )
};

export default NewArival;

