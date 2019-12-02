import React, { Component, Fragment } from 'react'

class Menu extends Component{
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            menuList: []
        }
    }
    iptChange(e) {
        // 错误写法：
        console.log(e.target.value);
        // this.state.inputValue = e.target.value;

        //  正确写法：
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.iptChange.bind(this)}/>
                    <button>增加菜单</button>
                </div>
                <ul>
                    <li>鱼香肉丝</li>
                    <li>麻辣小龙虾</li>
                </ul>
            </Fragment>
        )
    }
}

export default Menu;
