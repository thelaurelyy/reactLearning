import React from 'react'
import Link from 'next/link'
import { withRouter } from "next/router";

const jspangA = ({router}) => (
    <>
        <div>jspang-A页面, Name: {router.query.name}, Age: {router.query.age}</div>
        <div><Link href='/'><a>返回首页</a></Link></div>
    </>
)

export default withRouter(jspangA)