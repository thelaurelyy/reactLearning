import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import Vue from './video/Vue'
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        // 注意：嵌套路由不能用Router，使用div（有一个根节点即可）
        return (
            <div>
                <div className='topNav'>
                    <ul>
                        <li><Link to='/video/reactpage'>React教程</Link></li>
                        <li><Link to='/video/vue'>Vue教程</Link></li>
                        <li><Link to='/video/flutter'>Flutter教程</Link></li>
                    </ul>
                </div>
                <div className="videoContent">
                    <Route path='/video/reactpage' component={ReactPage} />
                    <Route path='/video/vue' component={Vue} />
                    <Route path='/video/flutter' component={Flutter} />
                </div>
            </div>
        )
    }

}

export default Video
