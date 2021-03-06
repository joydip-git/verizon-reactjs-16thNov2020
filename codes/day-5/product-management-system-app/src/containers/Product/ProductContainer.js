import React, { Component } from 'react'
import FilterProduct from '../../components/Product/FilterProduct/FilterProduct'
import ProductList from '../../components/Product/ProductList/ProductList'
import SortProduct from '../../components/Product/SortProduct/SortProduct'
import { fetchProductsAsyncCallbackCreator } from '../../redux/asyncoperations/productAsyncCallbacks'
import { connect } from 'react-redux'

class ProductContainer extends Component {

    componentDidMount() {
        this.props.getProducts()
    }
    render() {
        let design = null;
        const { products, error, loading } = this.props;
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

const mapStateToProps = (combinedState) => {
    return {
        products: combinedState.productsState.products,
        error: combinedState.productsState.error,
        loading: combinedState.productsState.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => {
            let callback = fetchProductsAsyncCallbackCreator();
            dispatch(callback);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
