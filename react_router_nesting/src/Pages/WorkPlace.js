import React from "react";
import { Route, Link } from 'react-router-dom'
import Money from './workPlace/Money'
import WakeUp from "./workPlace/WakeUp";

function WorkPlace() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to='/workplace/money/'>程序员加薪秘籍</Link></li>
                    <li><Link to='/workplace/wakeup/'>程序员早起秘籍</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <Route path='/workplace/money' component={Money} />
                <Route path='/workplace/wakeup' component={WakeUp} />
            </div>
        </div>
    )
}

export default WorkPlace
