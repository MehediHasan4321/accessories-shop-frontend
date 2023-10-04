'use client'
import HomeBanner from "@/src/components/homePage/homeBanner"
import NewArival from "@/src/components/homePage/newArival/NewArival"
import PopularProducts from "@/src/components/homePage/popularProducts/PopularProducts"
import ProductColleciton from "@/src/components/homePage/productCollection/ProductColleciton"
import Service from "@/src/components/homePage/service/Service"
import { QueryClient, QueryClientProvider } from 'react-query'
const Home = () => {
    const queryClient = new QueryClient
    return (
        <>
            <QueryClientProvider client={queryClient}>
            <HomeBanner />
            <ProductColleciton />
            <NewArival />
            <Service />
            <PopularProducts />
            </QueryClientProvider>
        </>

    )
}

export default Home

