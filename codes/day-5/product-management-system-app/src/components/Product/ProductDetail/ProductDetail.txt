import React, { Component } from 'react'
import { getProductRecordById } from '../../../services/productService'

export default class ProductDetail extends Component {
    state = {
        product: null,
        loading: true,
        error: null
    }
    componentDidMount() {
        const id = parseInt(this.props.match.params.id)
        //call you and pass id
        // you do rest of the job

        //initiate
        //abdul(fetchProductByIdAsync);
        getProductRecordById(id)
            .then(
                (successResponse) => {
                    this.setState({
                        product: successResponse.data,
                        loading: false,
                        error: null
                    })
                },
                (failureResponse) => {
                    this.setState({
                        product: null,
                        loading: false,
                        error: failureResponse
                    })
                })
            .catch(e => {
                this.setState({
                    product: null,
                    loading: false,
                    error: e.message
                })
            })
    }
    render() {
        const { product, loading, error } = this.state;

        let design = null;
        if (loading) {
            design = <span>Loading...</span>
        } else if (error !== null) {
            design = <span>{error}</span>
        } else if (product === null) {
            design = <span>No record found</span>
        } else {
            design = (
                <div>
                    Detail of:&nbsp;{product.productName}
                    <br />
                    <br />
                    <button
                        className='btn btn-primary'
                        onClick={() => this.props.history.push('/products')}>
                        Back
                    </button>
                </div>
            )
        }
        return design;
    }
}
