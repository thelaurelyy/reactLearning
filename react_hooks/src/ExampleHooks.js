import React, { useState } from "react";

let ifTrue = true;
function Example() {
    const [ count, setCount ] = useState(0)
    const [ age, setAge ] = useState(18)
    if(ifTrue) {
        const [ sex, setSex ] = useState("it's a secret.")
        ifTrue = false
    }
    const [ work, setWork ] = useState('前端程序员')
    return (
        <div>
            <div>
                <div>You click { count } times.</div>
                <button onClick={()=>{setCount(count+1)}}>Click me</button>
            </div>
            <div>
                <div>test 今年： { age } 岁</div>
                <div>性别是： { sex } </div>
                <div>职业是： { work } </div>
            </div>
        </div>
    );
}

export default Example
