import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'

// const data = [
//     '早晨8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5：30对今日代码进行review'
// ]

class TodoList extends Component {
    constructor(props) {
        super(props);
        // store中的数据不要直接使用在UI层
        // 可以直接复制给组件的state
        this.state = store.getState();
        console.log('data', this.state)
    }
    render() {
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder={this.state.inputValue} style={{ width: '250px', marginRight:'10px'}}/>
                    <Button type='primary'>增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item =>(<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
}

export default TodoList
