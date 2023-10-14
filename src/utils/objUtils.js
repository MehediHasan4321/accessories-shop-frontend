export const objDeepClone = obj=>{
    return JSON.parse(JSON.stringify(obj))
}

export const isObjEmpty = obj=>{
    return Object.keys(obj).length === 0
}

