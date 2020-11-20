import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProductByIdAsyncCallbackCreator } from '../../../redux/asyncoperations/productAsyncCallbacks'

class ProductDetail extends Component {

    componentDidMount() {
        let id = parseInt(this.props.match.params.id);
        this.props.getProduct(id);
    }

    render() {
        const { product, loading, error } = this.props;

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

const mapStateToProps = (combinedState) => {
    return {
        product: combinedState.productState.product,
        loading: combinedState.productState.loading,
        error: combinedState.productState.error
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: (productId) => {
            let callback = fetchProductByIdAsyncCallbackCreator(productId)
            dispatch(callback);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
//export default connector(ProductDetail);
