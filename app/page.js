'use client'
import HomeBanner from "./components/homePage/homeBanner"
import { QueryClient, QueryClientProvider } from 'react-query'
import NewArival from "./components/homePage/newArival/NewArival"
import ProductColleciton from "./components/homePage/productCollection/ProductColleciton"

const Home = () => {
    const queryClient = new QueryClient
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <HomeBanner />
                <ProductColleciton/>
                <NewArival/>
            </main>
        </QueryClientProvider>
    )
}

export default Home

