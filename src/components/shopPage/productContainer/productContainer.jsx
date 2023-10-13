'use client'
import { Box, Grid, Typography } from "@mui/material"
import SortNav from "../sortNav/sortNav"
import ProductCart from "@/src/components/share_component/productCart/ProductCart"
import useProductByCollection from "@/src/hooks/useProductByCollection/useProductByCollection"
import { useStoreState } from "easy-peasy"

const ProductContainer = () => {
    const { collection } = useStoreState(state => state.collection)
    const { subCollection } = useStoreState(state => state.subCollection)
    const {loading} = useStoreState(state=>state.loading)
    const { products, isLoading, isSuccess } = useProductByCollection(collection, subCollection)
    
    return (
        <Box sx={{ width: '100%' }}>
            <SortNav />
            {loading && <Typography variant="h4" textAlign={'center'}>Loading.....</Typography>}
            <Grid container sx={{ margin: '2rem' }} >
                
                {
                    products?.map((product, index) => <Grid key={product.id} xl={3} rowSpacing={2} marginBottom={5}>
                        <ProductCart product={product} />
                    </Grid>)
                }
            </Grid>
        </Box>
    )
}

export default ProductContainer