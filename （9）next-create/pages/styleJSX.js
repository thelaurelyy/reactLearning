import React, {useState} from 'react'

const styleJSX = () => {
    const [color, setColor] = useState('yellow');
    const changeColor = () => {
        setColor(color === 'yellow'?'purple':'yellow')
    };

    return (
        <>
            <div>学习React服务端渲染框架Next.js</div>
            <div className='current'>本节学习Style JSX修改css样式</div>
            <div><button onClick={changeColor}>变更样式</button></div>
            <style jsx>
                {`
                    div{color:blue}
                    .current{color:${color}
                `}
            </style>
        </>
    )
};

export default styleJSX