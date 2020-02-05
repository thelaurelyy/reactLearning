import React from 'react'
import Head from 'next/head'
import { Button } from 'antd'

const Header = () => (
    <>
        <Head>
            <title>yy是最棒的！~</title>
            <meta charSet='utf-8'/>
        </Head>
        <div>这是Header自定义页面</div>
        <div>
            <button>常规按钮</button>
        </div>
        <div>
            <Button>antd按钮</Button>
        </div>
    </>
);

export default Header