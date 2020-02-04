import React, { useState } from 'react'
// import moment from "moment";
import dynamic from "next/dynamic";

const Time = () => {
    const [timeNow, setTime] = useState(Date.now());

    // 懒加载模块
    const changeDateFormat = async () => {
        const moment = await import('moment');
        setTime(moment.default(timeNow).format())
    };

    //懒加载自定义组件
    const One = dynamic(import('../components/one'));

    return (
        <>
            <div>当前时间是： { timeNow }</div>
            <div><button onClick={changeDateFormat}>改变时间格式</button></div>
            <One />
        </>
    )
};

export default Time