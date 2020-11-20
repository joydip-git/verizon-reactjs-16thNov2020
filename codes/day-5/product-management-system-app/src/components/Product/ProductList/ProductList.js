import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow/ProductRow'

const ProductList = ({ records }) => {
    return (
        <>
            <div className="panel panel-heading">
                <h4>{records.length} Record(s) found...</h4>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead style={{ backgroundColor: 'burlywood' }}>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Code</td>
                            <td>Price</td>
                            <td>Rating</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            records.map((p) => {
                                return <ProductRow product={p} key={p.productId} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

ProductList.propTypes = {
    records: PropTypes.array.isRequired
}

export default ProductList
