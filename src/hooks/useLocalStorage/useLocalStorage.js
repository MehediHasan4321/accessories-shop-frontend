'use client'

const useLocalStorage = () => {


    const saveToLocalStorage = (key, item) => {
        
        localStorage.setItem(key,JSON.stringify(item))
    }

    const getFromLocalStorage = (key) => {
        const data = JSON.parse(localStorage.getItem(key))
        return data
    }

   
   
    return {
        saveToLocalStorage,
        getFromLocalStorage,
    }

}

export default useLocalStorage