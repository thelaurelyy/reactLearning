import React, { Component, Fragment } from 'react'
import './style.css'
import MenuItem from "./menuItem";

class Menu extends Component{
    constructor(props) {
        super(props); // 调用父类的构造函数，固定写法
        this.state = {
            inputValue: '',
            menuList: ['酸菜鱼', '芋头蒸肉']
        }
    }
    iptChange(e) {
        // 错误写法：
        // console.log(e.target.value);
        // this.state.inputValue = e.target.value;

        //  正确写法：
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({
            menuList: [...this.state.menuList, this.state.inputValue],
            inputValue: ''
        })
    }
    deleteItem(index) {
        console.log('index', index);
        let tempList = this.state.menuList;
        tempList.splice(index, 1);
        this.setState({
            menuList: tempList
        })
    }
    render() {
        return (
            <Fragment>
                {/*正确注释的写法*/}
                {
                    // 或者写成这样也可以
                }
                <div>
                    <label htmlFor="ipt-menu">加入菜单：</label> <br/>
                    <input id="ipt-menu" value={this.state.inputValue} onChange={this.iptChange.bind(this)}/>
                    <button className="btn-add" onClick={this.addList.bind(this)}>增加菜单</button>
                </div>
                <ul>
                    {
                        this.state.menuList.map((item, index) => {
                            // return <li
                            //         key={index}
                            //         onClick={this.deleteItem.bind(this, index)}
                            //         dangerouslySetInnerHTML={{__html: item}}></li>

                            return (
                                <li key={index}><MenuItem content={item} /></li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default Menu;
