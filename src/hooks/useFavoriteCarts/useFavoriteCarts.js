 'use client'
 import useLocalStorage from "../useLocalStorage/useLocalStorage"

const { useStoreState, useStoreActions } = require("easy-peasy")

const useFavoriteCarts = ()=>{
    const { saveToLocalStorage}= useLocalStorage()
    const {favorite,cart} = useStoreState(state=>state)
    const {favorite:favoriteAction,cart:cartAction} = useStoreActions(action=>action)

    
    saveToLocalStorage('favorite',favorite.favorite)
    saveToLocalStorage('cart',cart.carts)
    const storeFavarite = (product)=>{

        favoriteAction.addToFavorte(product)
        
    }
    const storeCarts = (product)=>{

        cartAction.addToCart(product)
        
    }

    const removeFromCart = (id)=>{

        cartAction.removeFromCart(id)
        
    }
    
    const removeFromFavorite = (id)=>{

        favoriteAction.removeFromFavorite(id)
        
        
    }


    return {
        storeCarts,
        storeFavarite,
        removeFromCart,
        removeFromFavorite,
        favorites:favorite.favorite,
        carts:cart.carts
    }

}


export default useFavoriteCarts