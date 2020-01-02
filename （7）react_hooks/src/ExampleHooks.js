import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    useEffect(()=>{
        console.log('useEffect=>老弟你来了！Index页面')
        return ()=>{
            console.log('老弟，你走了!Index页面')
        }
    }, [])
    return <h2>JSPang.com</h2>;
}

function List() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！List页面')
    })
    return (
        <h2>List-Page</h2>
    )
}


function Example() {
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)

        return () => {
            console.log('======================================')
        }
    }, [count])

    return (
        <div>
            <div>
                <div>You click { count } times.</div>
                <button onClick={()=>{setCount(count+1)}}>Click me</button>
            </div>

            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list/'>列表页</Link></li>
                </ul>
                <Route path='/' exact component={Index}></Route>
                <Route path='/list/' component={List}></Route>
            </Router>
        </div>
    );
}

export default Example
