import React from 'react'
import Link from 'next/link'
import Router from "next/router";

const Home = () => {
    function gotoA() {
        Router.push('/jspangA?name=yy&age=18')
    }
    function gotoB() {
        Router.push({
            pathname: '/jspangB',
            query: {
                name: 'yy',
                age: 3
            }
        })
    }
    return (
        <>
            <div>这是首页</div>
            <div><Link href='/jspangA?name=yy&age=18'><a>去A页面</a></Link></div>
            <div><Link href={{pathname: '/jspangB', query: {name: 'beautiful girl', age: 18}}}><a>去B页面</a></Link></div>
            <div>
                <button onClick={gotoA}>前往A页面</button>
                <button onClick={gotoB}>编程式跳转B</button>
            </div>
        </>
    )
}

export default Home