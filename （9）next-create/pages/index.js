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

    // 6个钩子事件
    // routeChangeStart
    // routeChangeComplete
    // routeChangeError
    // beforeHistoryChange
    // hashChangeStart
    // hashChangeComplete

    Router.events.on('routeChangeStart', (...args)=>{
        console.log('1.routeChangeStart->路由开始变化, 参数是：', ...args)
    });

    Router.events.on('routeChangeComplete', (...args)=>{
        console.log('2.routeChangeComplete->路由结束变化, 参数是：', ...args)
    });

    Router.events.on('beforeHistoryChange', (...args)=>{
        console.log('3.beforeHistoryChange->在改变浏览器history之前触发, 参数是：', ...args)
    });

    Router.events.on('routeChangeError', (...args)=>{
        console.log('4.routeChangeError->路由发生错误, 参数是：', ...args)
    });

    Router.events.on('hashChangeStart', (...args)=>{
        console.log('5.hashChangeStart->hash跳转开始执行, 参数是：', ...args)
    });

    Router.events.on('hashChangeComplete', (...args)=>{
        console.log('6.hashChangeComplete->hash跳转执行结束, 参数是：', ...args)
    });

    return (
        <>
            <div>这是首页</div>
            <div><Link href='/jspangA?name=yy&age=18'><a>去A页面</a></Link></div>
            <div><Link href={{pathname: '/jspangB', query: {name: 'beautiful girl', age: 18}}}><a>去B页面</a></Link></div>
            <div><Link href='#jspangA?name=test&age=3'><a>hash模式跳转</a></Link></div>
            <div>
                <button onClick={gotoA}>前往A页面</button>
                <button onClick={gotoB}>编程式跳转B</button>
            </div>
            <div>
                <Link href={{ pathname: '/getData', query: { menu: ['红烧带鱼', '酸辣土豆丝'] } }}><a>获取远端数据</a></Link>
            </div>
        </>
    )
};

export default Home