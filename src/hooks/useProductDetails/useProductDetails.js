import axiosInstance from "@/src/utils/axios"
import { useQuery } from "react-query"

const useProductDetails = ({ id }) => {

    const {data,isLoading } = useQuery({
        queryKey: ['productDetails'], queryFn: async () => {

            const response = await axiosInstance.get(`http://localhost:1337/api/products/${id}/?populate=*`).then(res=>res)
            
            return response
         
        }
    })

    console.log(data);


    return {
        details:data,
        isLoading
    }
}

export default useProductDetails