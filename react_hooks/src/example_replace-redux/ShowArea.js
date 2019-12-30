import React, { useContext } from 'react';
import { ColorContext } from './color'

function ShowArea() {
    const { color } = useContext(ColorContext)
    return (
        <p style={{color: color}}>这段文字的颜色是：{color}</p>
    )
}

export default ShowArea
