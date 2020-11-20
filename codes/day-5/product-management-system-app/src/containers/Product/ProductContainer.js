import React, { Component } from 'react'
import FilterProduct from '../../components/Product/FilterProduct/FilterProduct'
import ProductList from '../../components/Product/ProductList/ProductList'
import SortProduct from '../../components/Product/SortProduct/SortProduct'
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
                <div className="panel panel-prinary" style={{ border: '1px solid azure', borderRadius: '5px', margin: '5px' }}>
                    <div className="panel panel-body">
                        <div className="row">
                            <FilterProduct />
                            <SortProduct />
                        </div>
                        <br />
                        <ProductList records={products} />
                    </div>
                </div>
            );
        }
        return design;
    }
}
