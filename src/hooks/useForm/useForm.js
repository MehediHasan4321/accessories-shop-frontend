'use client'

import { objDeepClone } from "@/src/utils/objUtils"
import { useState } from "react"

const  useForm = (init)=>{
    const [state,setState] = useState(valueToState(init))
    const handleChange = (e)=>{
        const {name:key,value} = e.target
        const newObject = objDeepClone(state)
        newObject[key].value = value

        setState(newObject)
    }

    const handleSubmit = e=>{
        // e.preventDefault()
    }

    const handleBlure = (e)=>{

    }

    const handleTouch = e=>{

    }

    return {
        formState:state,
        handleBlure,
        handleChange,
        handleSubmit,
        handleTouch
    }
}




const valueToState = (obj)=>{
    return  Object.keys(obj).reduce((acc,curr)=>{
        acc[curr]={
            value:obj[curr],
            error:'',
            touch:false,
            focus:false
        }
        return acc
    },{})
}

export default useForm