'use client'
import { useStoreActions } from "easy-peasy"
import { useEffect } from "react"
const { default: axiosInstance } = require("@/src/utils/axios")
const { useQuery } = require("react-query")

const useProductByCollection = (collection, subCollection) => {
    const {setLoading} = useStoreActions(action=>action.loading)
    const url = (collection ? (subCollection ? `products?populate=*&filters[product_collection][collectionName][$in]=Cases&filters[sub_categories][subCategoryName][$in]=${subCollection}` : `products?filters[product_collection][collectionName][$in]=${collection}&populate=*`) : 'products?populate=*')
    useEffect(()=>{
        setLoading(true)
    },[subCollection])

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['productByCollection'], queryFn: async () => {
            const response = await axiosInstance.get(url)
            return response
        }
    })
    setLoading(false)
    return {

        products: data?.data?.data,
        isLoading,
        isSuccess
    }
}


export default useProductByCollection