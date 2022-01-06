import React, { Component } from 'react'

export default class GrandChild extends Component {
    constructor (props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h4>Grand Child</h4>
                <p>{this.props.data}</p>
            </div>
        )
    }
}
