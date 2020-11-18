import PropTypes from 'prop-types'

export default function Person({ personInfo, selectPerson }) {
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
    selectPerson: PropTypes.func.isRequired
}
