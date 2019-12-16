import React, { Component } from 'react';
// import TodoListUi from './TodoListUi'
import TodoListStateless from "./TodoListStateless";
// import axios from 'axios'
import store from './store/index'
import { changeInputAction, addItemAction, deleteItemAction/*, getListAction*/, getTodoList } from "./store/actionCreators"



class TodoList extends Component {
    constructor(props) {
        super(props);
        // store中的数据不要直接使用在UI层  
        // 可以直接复制给组件的state
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        store.subscribe(this.storeChange) // 订阅Redux的状态
    }
    componentDidMount() {
        // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
        //     console.log(res);
        //     const action = getListAction(res.data);
        //     store.dispatch(action)
        // })

        // use redux-thunk handle axios request
        const action = getTodoList(); // 这里的action是一个函数
        console.log(action)
        store.dispatch(action);
    }
    render() {
        // UI组件
        // return (
        //     <TodoListUi
        //         inputValue={this.state.inputValue}
        //         list={this.state.list}
        //         changeInputValue={this.changeInputValue}
        //         clickBtn={this.clickBtn}
        //         deleteItem={this.deleteItem}
        //     />
        // )

        // 无状态组件
        return (
            <TodoListStateless
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
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
