'use client'

import { useEffect, useState } from "react";

const IncDecBtn = ({handleQuantity,defaultQuantity=1}) => {
    const [state,setState] = useState(defaultQuantity)
    useEffect(()=>{
        handleQuantity(state)
    },[state])
    const btn_dec = {
        border:'1px solid #ddd',
        padding:'6px 10px',
        fontSize:'16px',
        borderRadius:'5px 0 0 5px',
        cursor:'pointer'
    }
    const btn_inc= {
        border:'1px solid #ddd',
        padding:'6px 10px',
        fontSize:'16px',
        borderRadius:'0 5px 5px 0',
        cursor:'pointer'
    }
    const common = {
        display:'flex',
        alignItems:'center'
    }

    
    const handleIncrement = ()=>{
        if(state<5){
            setState(prev=>prev + 1)
            
        }
    }
    const handleDecrement = ()=>{
        if(state>1){
            setState(prev=>prev - 1)
            
        }
    }

    return (
        <div style={common}>
            <button onClick={handleDecrement} style={btn_dec}>-</button>
            <span style={{padding:'6px 10px',fontSize:'18px',background:'#D0D0c3',}}>{state}</span>
            <button onClick={handleIncrement} style={btn_inc}>+</button>
        </div>
    );
};

export default IncDecBtn;