import React, { Component }  from 'react'
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { uid: 123, title: 'yy的测试demo-1' },
                { uid: 456, title: 'yy的测试demo-2' },
                { uid: 789, title: 'yy的测试demo-3' },
            ]
        };
        // 编程式重定向
        this.props.history.push('/home/')
    }
    render() {
        return (
            <ul>
                {/*
                    Redirect 重定向
                    <Redirect to='/home/' />
                */}
                {
                    this.state.list.map((item, index) => {
                        return (
                            <li key={index}><Link to={'/list/'+item.uid}>{item.title}</Link></li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default Index
