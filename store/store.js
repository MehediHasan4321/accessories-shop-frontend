"use client"
const { createStore, action,} = require("easy-peasy");

const favoriteModel = {
    favorite: [],
    addToFavorte: action((state, favoriteItem) => {
        state.favorite.push(favoriteItem)
    }),
    removeFromFavorite: action((state, id) => {
        state.favorite = state.favorite.filter(item => item.id !== id)

    })
}

const cartModal = {
    carts: [],

    addToCart: action((state, cartItem) => {
        state.carts.push(cartItem)
    }),
    removeFromCart: action((state, id) => {
        state.carts = state.carts.filter(item => item.id !== id)

    })
}

const collectionModel = {
    collection:'',
    addCollection : action((state,collectionName)=>{
        state.collection = collectionName
    })
}

const store = createStore({
    favorite: favoriteModel,
    cart: cartModal,
    collection:collectionModel,
})







export default store