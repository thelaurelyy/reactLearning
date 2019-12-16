import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from "./pages/Index";
import List from "./pages/List";

class AppRouter extends Component{

    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to='/list/123'>列表</Link></li>
                    </ul>
                    <Route path='/' component={Index} exact />
                    <Route path='/list/:id' component={List} />
                </Router>
            </div>
        )
    }
}

export default AppRouter;




