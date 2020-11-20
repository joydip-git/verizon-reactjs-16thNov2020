import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        console.log(this.props)
        console.log(this.props.match.params.id)
        return (
            <div>
                Product Detail
                <br />
                <button
                    className='btn btn-primary'
                    onClick={() => this.props.history.push('/products')}>
                    Back
                </button>
            </div>
        )
    }
}
