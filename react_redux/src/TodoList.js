import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'
import { changeInputAction, addItemAction, deleteItemAction } from "./store/actionCreators";


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
                        renderItem={(item, index) =>(<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value);
        store.dispatch(action) // 发布action
    }
    storeChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = addItemAction();
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index);
        store.dispatch(action)
    }
}

export default TodoList
