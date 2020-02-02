import React from 'react'
import Link from 'next/link'
import Router from "next/router";

const Home = () => {
    function gotoA() {
        Router.push('/jspangA')
    }
    return (
        <>
            <div>这是首页</div>
            <div><Link href='/jspangA'><a>去A页面</a></Link></div>
            <div><Link href='/jspangB'><a>去B页面</a></Link></div>
            <div>
                <button onClick={gotoA}>前往A页面</button>
                <button onClick={gotoA}>编程式跳转A</button>
            </div>
        </>
    )
}

export default Home