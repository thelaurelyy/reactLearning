import React, { useRef } from "react";

function Example() {
    const inputEl = useRef(null)
    const onButtonClick = ()=>{
        inputEl.current.value = 'Hello, yy ~'
        console.log(inputEl)
    }
    return (
        <div>
            {/*保存input的ref到inputEl*/}
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>在input上展示文字</button>
        </div>
    )

}

export default Example
