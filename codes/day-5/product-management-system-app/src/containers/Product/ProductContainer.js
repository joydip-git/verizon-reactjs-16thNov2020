import React, { Component } from 'react'
import ProductList from '../../components/Product/ProductList/ProductList'
import { getProductRecords } from '../../services/productService'

export default class ProductContainer extends Component {
    state = {
        products: [],
        loading: true,
        error: null
    }
    componentDidMount() {
        getProductRecords()
            .then(
                (successResponse) => {
                    this.setState({
                        products: successResponse.data,
                        loading: false,
                        error: null
                    })
                }, (failureReason) => {
                    this.setState({
                        products: [],
                        loading: false,
                        error: failureReason
                    })
                })
            .catch(e => {
                this.setState({
                    products: [],
                    loading: false,
                    error: e.message
                })
            })
    }
    render() {

        let design = null;
        const { products, error, loading } = this.state;
        if (loading) {
            design = <span>Loading...</span>
        } else if (error !== null) {
            design = <span>{error}</span>
        } else if (products.length === 0) {
            design = <span>No products found</span>
        } else {
            design = (
                <div>
                    <ProductList records={products}/>
                </div>
            );
        }
        return design;
    }
}
