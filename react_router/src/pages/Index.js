import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { uid: 123, title: 'yy的测试demo-1' },
                { uid: 456, title: 'yy的测试demo-2' },
                { uid: 789, title: 'yy的测试demo-3' },
            ]
        }
    }
    render() {
        return (
            <ul>
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
