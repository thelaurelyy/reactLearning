import React, { Component } from 'react'
import LifeChild from "./lifeChild";

class LifeParent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: ['child_01', 'child_02', 'child_03']
        };
        console.log('parent，1------------->init state and props');
    }
    componentWillMount() {
        console.log('parent，2------------->componentWillMount');
    }
    render() {
        console.log('parent，3------------->render');
        return (
            <div>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <LifeChild key={index} childName={item} />
                        )
                    })
                }
                <button onClick={this.handleClick.bind(this)}>change state</button>
                <button onClick={this.handleDelete.bind(this)}>delete state</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('parent，4------------->componentDidMount')
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('parent，5------------->shouldComponentUpdate');
        return true
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('parent，6------------->componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('parent，7------------->componentDidUpdate')
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('parent，8------------->componentWillReceiveProps')
    }
    componentWillUnmount() {
        console.log('parent, 9------------->componentWillUnmount')
    }

    handleClick() {
        this.setState({
            list: ['child_04', 'child_05', 'child_06']
        })
    }
    handleDelete() {
        let tempList = this.state.list;
        tempList.splice(0, 1);
        this.setState({
            list: tempList
        })
    }
}

export default LifeParent
