import React, { Component } from 'react';
import store from "./store";
import { connect } from "react-redux";

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }
    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.inputChange} />
                    <button onClick={this.props.clickButton}>增加选项</button>
                </div>
                <div>
                    输入值： {this.props.inputValue}
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <li key={index} onClick={()=>{this.props.deleteItem(index)}}>{item}</li>
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
