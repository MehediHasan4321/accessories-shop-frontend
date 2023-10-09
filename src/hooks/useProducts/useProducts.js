
import { useQuery } from "react-query"

const useProducts = ()=>{
    const {data,isLoading,isError,isSuccess} = useQuery({queryKey:['products'],queryFn:async()=>{
        const res = await fetch(`http://localhost:1337/api/products?populate=*`)
        return res.json()
    }})

    
    return  {
        products:data,
        isLoading,
        isError,
        isSuccess
    }
}

export default useProducts