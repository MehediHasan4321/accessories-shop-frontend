import axiosInstance from "@/src/utils/axios"
import { useQuery } from "react-query"

const useProductDetails = (id) => {

    const { data, isLoading } = useQuery({
        queryKey: ['productDetails'], suspense: true, queryFn: () => {

            const response = axiosInstance.get(`http://localhost:1337/api/products/${id}/?populate=*`).then(res => res)

            return response

        }
    })

    const productData = data?.data?.data?.attributes
    const reviews = productData?.reviews?.data
    const images = productData?.image?.data
    const ratingCount = reviews.length
    const description = productData?.description
    const rating = reviews.reduce((acc, curr) => {
        acc += curr?.attributes?.rating
        return acc
    }, 0)

    const details = {
        title: productData?.title,
        price: productData?.price,
        quantity: productData?.quantity,
        product_collection: productData?.product_collection?.data,
        sub_category: productData?.sub_categories?.data,
        tags: productData?.tags?.data,
        socialMedia: productData?.socila_medias?.data,
        rating,
        ratingCount,
    }


    

    return {
        details: details,
        images,
        isLoading,
        reviews,
        description,
    }
}

export default useProductDetails