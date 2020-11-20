import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow/ProductRow'

const ProductList = props => {
    return (
        <div>
            Products List
            <ProductRow />
        </div>
    )
}

ProductList.propTypes = {

}

export default ProductList
