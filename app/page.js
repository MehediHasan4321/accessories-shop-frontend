'use client'
import HomeBanner from "@/src/components/homePage/homeBanner"
import NewArival from "@/src/components/homePage/newArival/NewArival"
import PopularProducts from "@/src/components/homePage/popularProducts/PopularProducts"
import ProductColleciton from "@/src/components/homePage/productCollection/ProductColleciton"
import Service from "@/src/components/homePage/service/Service"



const Home = () => {

    return (

        <>
            <HomeBanner />
            <ProductColleciton />
            <NewArival />
            <Service />
            <PopularProducts />  
        </>

    )
}

export default Home

