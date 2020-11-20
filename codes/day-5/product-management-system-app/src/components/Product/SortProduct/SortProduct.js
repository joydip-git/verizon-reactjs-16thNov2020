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
                    <option key={-1} disabled selected>--select--</option>
                    <option key={0} >Id</option>
                    <option key={1} >Name</option>
                    <option key={2} >Price</option>
                    <option key={3} >Rating</option>
                </select>
            </div>
        </>
    )
}

SortProduct.propTypes = {

}

export default SortProduct
