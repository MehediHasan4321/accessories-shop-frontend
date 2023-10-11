const { default: axiosInstance } = require("@/src/utils/axios")
const { useQuery } = require("react-query")

const useCollectonName = (name)=>{
     const {data,isLoading} = useQuery({queryKey:['collectionName'],queryFn:async()=>{
        const response =await axiosInstance.get(`product-categories?filters[collectionName][$eq]=${name}&populate=*`)
        return response
     }})

     return {
        subCategorys:data?.data?.data[0]?.attributes?.sub_categories?.data,
        isLoading}
}

export default useCollectonName