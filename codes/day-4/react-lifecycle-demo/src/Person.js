import React from 'react'
import PropTypes from 'prop-types'

const Person = ({ personInfo, selectPerson }) => {
    console.log('[Person] rendered')
    return (
        <div
            style={{ margin: '5px', border: '1px solid blue', textAlign: 'center' }}
            onClick={() => selectPerson(personInfo.id)}>
            {personInfo.name}
        </div>
    );
}

Person.propTypes = {
    personInfo: PropTypes.object.isRequired,
    selectPerson: PropTypes.func.isRequired,
}

export default Person
