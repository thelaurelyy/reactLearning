import React, { Component, Fragment } from 'react'

class Menu extends Component{
    constructor(props) {
        super(props) // 调用父类的构造函数，固定写法
        this.state = {
            inputValue: '',
            menuList: ['酸菜鱼', '芋头蒸肉']
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
    addList() {
        this.setState({
            menuList: [...this.state.menuList, this.state.inputValue]
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.iptChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加菜单</button>
                </div>
                <ul>
                    {
                        this.state.menuList.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default Menu;
