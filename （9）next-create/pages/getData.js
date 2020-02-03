import React from 'react'
import Link from 'next/link'
import { withRouter } from "next/router";
import axios from 'axios'

const delicious = ({router, list}) => (
    <>
        <div>let's have some delicious foods.{ router.query.menu }</div>
        <div>{ list }</div>
        <div><Link href='/'><a>返回首页</a></Link></div>
    </>
);

delicious.getInitialProps = async () => {
    const promise = new Promise((resolve)=>{
        axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(
            res => {
                console.log('远程数据结果->', res);
                resolve(res.data.data)
            }
        )
    });
    return await promise
};

export default withRouter(delicious)