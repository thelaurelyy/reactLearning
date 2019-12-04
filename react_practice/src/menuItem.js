import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MenuItem extends Component{
    constructor(props) { // constructor 绑定this方法
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <div onClick={this.handleClick}>{this.props.content}：{this.props.price} 元</div>
        )
    }
    handleClick() {
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

// MenuItem.PropTypes = {   // 错误写法
MenuItem.propTypes = {
    content: PropTypes.string.isRequired,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    price: PropTypes.string.isRequired
};

MenuItem.defaultProps = {
    price: '20.0'
};

export default MenuItem;
