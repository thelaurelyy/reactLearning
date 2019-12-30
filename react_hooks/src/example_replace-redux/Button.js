import React, { useContext } from 'react';
import { ColorContext, UPDATE_COLOR } from './color'

function Button(){
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            <button onClick={()=>{ dispatch({color: 'red', type: UPDATE_COLOR}) }}>红色</button>
            <button onClick={()=>{ dispatch({color: 'yellow', type: UPDATE_COLOR})}}>黄色</button>
        </div>
    )

}
export default Button
