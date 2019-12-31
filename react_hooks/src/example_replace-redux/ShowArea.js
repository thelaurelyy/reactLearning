import React, { useContext } from "react";
import { UPDATE_COLOR } from "./color";
import { ColorContext as aa } from './color'

function ShowArea() {
    const { dispatch } = useContext(aa)
    return (
        <div>
            <button onClick={ ()=>{dispatch({type:UPDATE_COLOR, color: 'purple'})} }>紫色</button>
            <button onClick={ ()=>{dispatch({type:UPDATE_COLOR, color: 'yellow'})} }>黄色</button>
        </div>
    )
}

export default ShowArea
