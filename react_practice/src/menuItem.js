import React, { Component } from 'react'

class MenuItem extends Component{
    constructor(props) { // constructor 绑定this方法
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <div onClick={this.handleClick}>{this.props.content}</div>
        )
    }
    handleClick() {
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

export default MenuItem;
