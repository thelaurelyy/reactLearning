import React, { useReducer } from 'react'

function ExampleReducer() {

    const [ count, dispatch ] = useReducer((state, action)=>{
        switch(action) {
            case 'add':
                return state+1;
            case 'sub':
                return state-1;
            default:
                return state;
        }
    }, 0)

    return (
        <div>
            <p>现在的分数是： { count }</p>
            <button onClick={()=>{dispatch('add')}}>Increment</button>
            <button onClick={()=>{dispatch('sub')}}>Decrement</button>
        </div>
    )
}

export default ExampleReducer
