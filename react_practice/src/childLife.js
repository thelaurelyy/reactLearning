import React, { Component } from 'react'


class ChildLife extends Component{
    constructor(props) {
        super(props);
        console.log('child，1------------->init state and props');
    }
    componentWillMount() {
        console.log('child，2------------->componentWillMount');
    }
    render() {
        console.log('child，3------------->render')
        return (
            <div>
                {this.props.childName}
            </div>
        )
    }
    componentDidMount() {
        console.log('child，4------------->componentDidMount')
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('child，5------------->shouldComponentUpdate')
        return true
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('child，6------------->componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('child，7------------->componentDidUpdate')
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('child，8------------->componentWillReceiveProps')
    }
    componentWillUnmount() {
        console.log('child, 9------------->componentWillUnmount')
    }
}

export default ChildLife
