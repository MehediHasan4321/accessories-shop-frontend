'use client'
export const setLocalstorage = (key,item)=>{
    return localStorage.setItem(key,JSON.stringify(item))
}


export const getFromLocalstorage = (key)=>{
    
    return JSON.parse(localStorage.getItem(key))
}
