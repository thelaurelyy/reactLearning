import React, { Component } from "react";

class Example extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log(`ComponentDidMount => You clicked ${this.state.count} times`)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`componentDidUpdate => You clicked ${this.state.count} times`)
    }

    render() {
        return (
            <div>
                <div>You click { this.state.count } times.</div>
                <button onClick={this.addCount.bind(this)}>Click me</button>
            </div>
        );
    }
    addCount() {
        this.setState({
            count: this.state.count+1
        })
    }

}

export default Example
