import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './style.css'
import MenuItem from "./menuItem";
import Transition from './css-transition'
import { CSSTransition, TransitionGroup } from "react-transition-group";


import Boss from "./Boss";

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
            // inputValue: e.target.value
            inputValue: this.ipt01.value
        })
    }
    addList() {
        this.setState({
            menuList: [...this.state.menuList, this.state.inputValue],
            inputValue: ''
        }, ()=>{
            console.log(this.ul01.querySelectorAll('div').length)
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
                    <input id="ipt-menu" value={this.state.inputValue}
                           onChange={this.iptChange.bind(this)}
                           ref={(input)=>{this.ipt01 = input}} />

                    <button className="btn-add" onClick={this.addList.bind(this)}>增加菜单</button>
                </div>
                <ul ref={(ul)=>{this.ul01 = ul}}>
                    <TransitionGroup>
                    {
                        this.state.menuList.map((item, index) => {
                            // return <li
                            //         key={index}
                            //         onClick={this.deleteItem.bind(this, index)}
                            //         dangerouslySetInnerHTML={{__html: item}}></li>

                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames='boss-text'
                                    unmountOnExit
                                    appear={true}
                                    key={index}
                                >
                                    <li>
                                        {/*注意：deleteItem传递给子组件时也需要绑定this*/}
                                        <MenuItem ref={(el=>{this.el = el; console.log('el.state', this.el.state)})} content={item} index={index} deleteItem={this.deleteItem.bind(this)} />
                                    </li>
                                </CSSTransition>
                            )
                        })
                    }
                    </TransitionGroup>
                </ul>
                <Boss /> <br/>
                <Transition />
            </Fragment>
        )
    }
    componentDidMount() {
        axios.post(' https://www.easy-mock.com/mock/5de8744789c8451dc927ee11/reactLearning/getMenuList')
            .then((res)=>{
                console.log('axios 获取数据成功：', JSON.stringify(res));
                this.setState({
                    menuList: res.data.data
                })
            })
            .catch((error)=>{
                console.log('axios 获取数据失败：', error)
            })
    }
}

export default Menu;
