import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (    
            <div>
                <h2> List page.</h2>
                <h3> page id is -> {this.state.id}</h3>
            </div>
        );
    }
    componentDidMount() {
        console.log('this.props.match', this.props.match);
        let tempId = this.props.match.params.id;
        this.setState({
            id: tempId
        })
    }
}

export default List
