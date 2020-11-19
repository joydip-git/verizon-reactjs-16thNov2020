import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    state = {
        counter: 0
    }

    static propTypes = {
        render: PropTypes.func.isRequired
    }
    increaseCounterHandler = () => {
        //x: previous state (1st arg)
        //p: latest properties (2nd arg)
        this.setState((x, p) => {
            return {
                counter: x.counter + 1
            }
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.counter, this.increaseCounterHandler)}
            </div>
        )
    }
}
