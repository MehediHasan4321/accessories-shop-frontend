import axiosInstance from "@/src/utils/axios"
import { useQuery } from "react-query"

const useProductDetails = (id) => {
    
    const {data,isLoading } = useQuery({
        queryKey: ['productDetails'],suspense:true, queryFn:  () => {

            const response =  axiosInstance.get(`http://localhost:1337/api/products/${id}/?populate=*`).then(res=>res)
            
            return response
         
        }
    })

  


    return {
        details:data,
        isLoading
    }
}

export default useProductDetails