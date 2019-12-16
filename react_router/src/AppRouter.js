import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
    return (
        <h2>JSpang, Index page.</h2>
    )
}

function List() {
    return (
        <h2>Myself, List page.</h2>
    )
}

function AppRouter() {
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list/'>列表</Link></li>
                </ul>
                <Route path='/' component={Index} exact />
                <Route path='/list/' component={List} />
            </Router>
        </div>
    )
}

export default AppRouter;




