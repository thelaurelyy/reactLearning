import React, { useContext } from "react";
import { ColorContext } from './color'

function Button() {
    const { color } = useContext(ColorContext)
    return (
        <div style={{color:color}}>这段文字的颜色是：{color}</div>
    )
}

export default Button
