import axiosInstance from "@/src/utils/axios"
import { useQuery } from "react-query"

const useServices = ()=>{

    const {data,isLoading} = useQuery({queryKey:['ourServices'],queryFn:async()=>{
        const response = await axiosInstance.get('our-services?populate=*').then(res=>{
            return res
         })
        const data = response
        return data?.data
    }})
   
    return {
       services:data,
        isLoading
    }
}

export default useServices