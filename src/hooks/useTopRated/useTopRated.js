
import useProducts from "../useProducts/useProducts"

const useTopRated = ()=>{
    const {isLoading,products} = useProducts()
    const topRated = products?.data?.slice(0,3)
    return {topRated,isLoading}
}

export default useTopRated