import React, { useState, useMemo } from "react";

function ChildComponent({name, children}) {
    function changeApple(name) {
        console.log('有一个好吃的苹果')
        return name+',有新鲜的苹果可以吃哦~'
    }

    const actionApple = useMemo(()=>changeApple(name),[name])
    return (
        <div>
            <div>{actionApple}</div>
            <div>{children}</div>
        </div>
    )
}

function Example() {
    const [apple, setApple] = useState('有一个苹果')
    const [peach, setPeach] = useState('有一个桃子')
    return (
        <div>
            <button onClick={()=>{setApple(new Date().getTime())}}>苹果</button>
            <button onClick={()=>{setPeach(new Date().getTime()+'，有新鲜的桃子')}}>桃子</button>
            <ChildComponent name={apple}>{peach}</ChildComponent>
        </div>
    )
}

export default Example

