import React, { Component } from 'react'


class Boss extends Component {
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
        })
    }
    render() {
        return (
            <div>
                <div className={this.state.isShow?'show':'hide'}>增加一个简单的显隐动画</div>
                <div><button onClick={this.toToggle}>显隐动画</button></div>
            </div>
        );
    }
}

export default Boss
