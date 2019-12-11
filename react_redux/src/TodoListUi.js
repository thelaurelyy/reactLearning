import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class TodoListUi extends Component {

    render() {
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input
                        value={this.props.inputValue}
                        onChange={this.props.changeInputValue}
                        style={{ width: '250px', marginRight:'10px'}}
                    />
                    <Button type='primary' onClick={this.props.clickBtn} >增加</Button>
                </div>
                <div style={{ margin: '20px 0' }}>输入信息：{this.props.inputValue}</div>
                <div style={{ width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) =>(<List.Item onClick={(index)=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}

export default TodoListUi;
