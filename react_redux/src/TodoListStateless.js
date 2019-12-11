import React  from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListStateless = (props) => {
    return (
        <div style={{margin:'10px'}}>
            <div>
                <Input
                    value={props.inputValue}
                    onChange={props.changeInputValue}
                    style={{ width: '250px', marginRight:'10px'}}
                />
                <Button type='primary' onClick={props.clickBtn} >增加</Button>
            </div>
            <div style={{ margin: '20px 0' }}>输入信息：{props.inputValue}</div>
            <div style={{ width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) =>(<List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>)}
                />
            </div>
        </div>
    );
}

export default TodoListStateless;
