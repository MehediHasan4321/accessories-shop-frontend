"use client"
import store from "@/store/store"
import { StoreProvider } from "easy-peasy"
import { QueryClient, QueryClientProvider, } from "react-query"


const Provider = ({ children }) => {
    const client = new QueryClient()

    return <QueryClientProvider client={client}>

        <StoreProvider store={store}>
            {children}
        </StoreProvider>

    </QueryClientProvider>

}

export default Provider