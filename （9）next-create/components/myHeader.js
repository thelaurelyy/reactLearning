import React from 'react'
import Head from 'next/head'

const MyHeader = ({title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet='utf-8'/>
            </Head>
        </>
    );
};

export default MyHeader