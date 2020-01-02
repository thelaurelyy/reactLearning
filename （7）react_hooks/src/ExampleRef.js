import React, {useEffect, useRef, useState} from "react";

function Example() {
    const inputEl = useRef(null)
    const onButtonClick = ()=>{
        inputEl.current.value = 'Hello, yy ~'
        console.log(inputEl)
    }

    const [text, setText] = useState('yy')
    const textRef = useRef()

    useEffect(()=>{
        textRef.current = text;
        console.log('textRef.current:', textRef.current)
    })


    return (
        <div>
            {/*保存input的ref到inputEl*/}
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br/>
            <br/>
            <input type={text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
    )

}

export default Example
