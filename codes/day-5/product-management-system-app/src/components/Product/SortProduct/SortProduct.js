import React from 'react'
import PropTypes from 'prop-types'

const SortProduct = props => {
    return (
        <>
            <div className="col-md-2">
                Sort By:
            </div>
            <div className="col-md-4">
                <select>
                    <option key={-1} disabled>--select--</option>
                    <option key={0} disabled>Id</option>
                    <option key={1} disabled>Name</option>
                    <option key={2} disabled>Price</option>
                    <option key={3} disabled>Rating</option>
                </select>                
            </div>
        </>
    )
}

SortProduct.propTypes = {

}

export default SortProduct
