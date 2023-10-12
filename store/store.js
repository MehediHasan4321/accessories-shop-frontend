"use client"

import useLocalStorage from "@/src/hooks/useLocalStorage/useLocalStorage";

const { createStore, action, } = require("easy-peasy");
const { getFromLocalStorage } = useLocalStorage()



const favoriteItem = getFromLocalStorage('favorite') || []
const favoriteModel = {
    favorite: [...favoriteItem],

    addToFavorte: action((state, favoriteItem) => {
        const favoriteCart = state.favorite
        const isSame = favoriteCart.some(item=>item.id === favoriteItem.id)
        if(!isSame){
            favoriteCart.push(favoriteItem)
        }else{
            alert('This Favorite Item alredy added')
        }
    }),
    removeFromFavorite: action((state, id) => {
        state.favorite = state.favorite.filter(item => item.id !== id)

    })
}


const productItem = getFromLocalStorage('cart') || []

const cartModal = {
    carts: [...productItem],
    addToCart: action((state, cartItem) => {
        const cartContainer = state.carts
        const same = cartContainer.some(item=>item.id === cartItem.id)
        
        if(!same){
            cartContainer.push(cartItem)
        }else{
            alert('alredy added this product')
        }
        
    }),
    removeFromCart: action((state, id) => {
        state.carts = state.carts.filter(item => item.id !== id)

    })
}

const collectionModel = {
    collection: '',
    addCollection: action((state, collectionName) => {
        state.collection = collectionName
    })
}
const subCollectionModel = {
    subCollection: '',
    addSubCollection: action((state, subCollection) => {
        state.subCollection = subCollection
    })
}
const loadingModal = {
    loading: false,
    setLoading: action((state, isLoading) => {
        state.loading = isLoading
    })
}

const store = createStore({
    favorite: favoriteModel,
    cart: cartModal,
    collection: collectionModel,
    subCollection: subCollectionModel,
    loading: loadingModal,
})







export default store