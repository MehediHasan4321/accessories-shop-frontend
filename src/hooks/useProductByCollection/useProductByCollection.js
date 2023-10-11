'use client'
import { useEffect, useState } from "react"
const { default: axiosInstance } = require("@/src/utils/axios")
const { useQuery } = require("react-query")

const useProductByCollection = (collection) => {
    const [url, setUrl] = useState(collection ? `products?filters[product_collection][collectionName][$in]=${collection}&populate=*` : 'products?populate=*')

    

    const { data, isLoading } = useQuery({
        queryKey: ['productByCollection'], queryFn: async () => {
            const response = await axiosInstance.get(url)
            return response
        }
    })
    console.log(url);
    return {

        products: data?.data?.data,
        isLoading: isLoading
    }
}


export default useProductByCollection