import React from 'react'
import PropTypes from 'prop-types'

const FilterProduct = props => {
    return (
        <>
            <div className="col-md-2">
                Filter By:
            </div>
            <div className="col-md-4">
                <input
                    type="text"
                    value=''

                />
            </div>
        </>
    )
}

FilterProduct.propTypes = {

}

export default FilterProduct
