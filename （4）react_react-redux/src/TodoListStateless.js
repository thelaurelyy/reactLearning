import React  from 'react';
import { connect } from "react-redux";

const TodoList = (props) => {
    let { inputValue, list, inputChange, clickButton, deleteItem } = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange} />
                <button onClick={clickButton}>增加选项</button>
            </div>
            <div>
                输入值： {inputValue}
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index} onClick={()=>{deleteItem(index)}}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

const stateToProps = (state) => {
    return {
        inputValue : state.inputValue,
        list:state.list
    }
};

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'input_change',
                value: e.target.value
            };
            dispatch(action)
            // 注意： 这里是dispatch.(action)，而不是store.dipatch(action)
        },
        clickButton() {
            let action = {
                type: 'add_item',
            };
            dispatch(action)
        },
        deleteItem(index) {
            let action = {
                type: 'delete_item',
                value: index
            };
            dispatch(action)
        }
    }
};

export default connect(stateToProps, dispatchToProps)(TodoList)
