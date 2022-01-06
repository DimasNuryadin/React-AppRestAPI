import React, { Component } from 'react'
import {Alert} from 'reactstrap'

export default class BootstrapComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h3>Hello Bootstrap</h3>
                <div>
                    <Alert color="primary">
                        This is a primary alert with{' '}
                        <a
                            className="alert-link"
                            href="#"
                        >
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                    <Alert color="secondary">
                        This is a secondary alert with{' '}
                        <a
                            className="alert-link"
                            href="#"
                        >
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                    <Alert>
                        This is a success alert with{' '}
                        <a
                            className="alert-link"
                            href="#"
                        >
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                    <Alert color="danger">
                        This is a danger alert with{' '}
                        <a
                            className="alert-link"
                            href="#"
                        >
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                    <Alert color="warning">
                        This is a warning alert with{' '}
                        <a
                            className="alert-link"
                            href="#"
                        >
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                    <Alert color="info">
                        This is a info alert with{' '}
                        <a
                            className="alert-link"
                            href="#"
                        >
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                    <Alert color="light">
                        This is a light alert with{' '}
                        <a
                            className="alert-link"
                            href="#"
                        >
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                    <Alert color="dark">
                        This is a dark alert with{' '}
                        <a
                            className="alert-link"
                            href="#"
                        >
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                </div>
            </div>
        )
    }
}
