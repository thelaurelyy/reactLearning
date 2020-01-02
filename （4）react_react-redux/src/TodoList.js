import React, { Component } from 'react';
import store from "./store";
import { connect } from "react-redux";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    render() {
        let { inputValue, list, inputChange, clickButton, deleteItem } = this.props;
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
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = {
                type: 'input_change',
                value: e.target.value
            };
            dispatch(action)
            // 注意： 这里是dispatch.(action)，而不是store.dipatch(action)
        },
        clickButton() {
            const action = {
                type: 'add_item',
            };
            dispatch(action)
        },
        deleteItem(index) {
            const action = {
                type: 'delete_item',
                value: index
            };
            dispatch(action)
        }
    }
};

export default connect(stateToProps, dispatchToProps)(TodoList)
