import { CSSTransition } from "react-transition-group";
import React, { Component } from 'react'

class Transition extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
        this.toToggle = this.toToggle.bind(this)
    }
    toToggle() {
        this.setState({
            isShow: !this.state.isShow
        });
        console.log('isShow', this.state.isShow)
    }
    render() {
        return (
            <div>
                {/*<CSSTransition in={this.state.isShow} timeout={2000} classNames="boss-text" unmountOnExit>*/}
                <CSSTransition
                    in={this.state.isShow}   //用于判断是否出现的状态
                    timeout={2000}           //动画持续时间
                    classNames="boss-text"   //className值，防止重复
                    unmountOnExit
                >
                    <div>Boss出现</div>
                </CSSTransition>
                <div><button onClick={this.toToggle}>切换动画</button></div>
            </div>

        )
    }
}

export default Transition
