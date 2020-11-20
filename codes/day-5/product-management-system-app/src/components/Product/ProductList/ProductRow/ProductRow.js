import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductRow = ({ product }) => {
    return (
        <tr>
            <td>
                <Link to={`/products/${product.productId}`}>
                    <div className="img-responsive">
                        <img
                            src={product.imageUrl} alt="NA"
                            style={{
                                margin: '2px',
                                width: '50px'
                            }}
                            title={product.productName}
                        />
                    </div>
                </Link>
            </td>
            <td>
                <Link to={`/product/update/${product.productId}`}>
                    {product.productName}
                </Link>
            </td>
            <td>{product.productCode}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    )
}

ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductRow
