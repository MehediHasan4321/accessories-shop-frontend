import useProducts from "@/src/hooks/useProducts/useProducts"
import { Box, Grid } from "@mui/material"
import SortNav from "../sortNav/sortNav"
import ProductCart from "@/src/components/share_component/productCart/ProductCart"

const ProductContainer = () => {
    const { products, isLoading } = useProducts()

    return (
        <Box sx={{ width: '100%' }}>
            <SortNav />
            <Grid container sx={{ margin: '2rem' }} >
                {
                    products?.data.map((product, index) => <Grid key={product.id} xl={3} rowSpacing={2} marginBottom={5}>
                        <ProductCart product={product} />
                    </Grid>)
                }
            </Grid>
        </Box>
    )
}

export default ProductContainer