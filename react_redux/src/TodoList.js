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
        console.log('data', this.state);
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);

        store.subscribe(this.storeChange) // 订阅Redux的状态
    }
    render() {
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input value={this.state.inputValue} style={{ width: '250px', marginRight:'10px'}} onChange={this.changeInputValue}/>
                    <Button type='primary' onClick={this.clickBtn} >增加</Button>
                </div>
                <div style={{ margin: '20px 0' }}>输入信息：{this.state.inputValue}</div>
                <div style={{ width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item =>(<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
    changeInputValue(e) {
        console.log(e.target.value);
        const action = {
            type: 'changeInput',
            value: e.target.value
        };
        store.dispatch(action) // 发布action
    }
    storeChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = {
            type: 'addItem'
        };
        store.dispatch(action)
    }
}

export default TodoList
