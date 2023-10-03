const { useQuery } = require("react-query")


const useCollection = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['productColleciton'], queryFn: async () => {
            const res = await fetch('http://localhost:1337/api/product-categories?populate=*')
            return res.json()
        }
    })
    return {
        collections:data,
        isLoading
    }

}

export default useCollection