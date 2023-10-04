import SectionTitle from '../../share_component/sectionTitle/SectionTitle';
import { Container } from '@mui/material';
import ProductCart from '../../share_component/productCart/ProductCart';
import useProducts from '@/src/hooks/useProducts/useProducts';

const NewArival = () => {
    const {products} = useProducts()
    const info = {
        title:'New Arival',
        description:'How can you evaluate content without design'
    }
    return(
        <>
        <SectionTitle info={info}/>
        <Container maxWidth='xl' sx={{display:'flex',gap:'1.7rem',flexWrap:'wrap',marginTop:'60px'}}>
            {
                products?.data.map(product=><ProductCart product={product} key={product.id}/>)
            }
        </Container>
        </>
    )
};

export default NewArival;

