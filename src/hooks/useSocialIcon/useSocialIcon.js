import axiosInstance from "@/src/utils/axios"
import { useQuery } from "react-query"

const useSocialIcon = (socialmedia)=>{

    const {data,isLoading} = useQuery({queryKey:['socialIcon'],queryFn:async()=>{
        const response =await axiosInstance.get('socila-medias?populate=*')
        return response
    }})
    
    const socialIcon = data?.data?.data
    const icon = socialIcon?.filter(item=>{
        return item?.attributes?.name === socialmedia
        
    })

    return {icon,isLoading}
    
}

export default useSocialIcon