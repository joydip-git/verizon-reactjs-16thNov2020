import PropTypes from 'prop-types'
import { memo } from 'react';

function PersonCard({ personData, editPerson }) {
    console.log('[PersonCard] rendered')
    return (
        <div className='container'>
            <div className='panel panel-primary'>
                <div className='panel panel-heading'>
                    Details of:&nbsp;{personData.name}
                    &nbsp;&nbsp;&nbsp;
                    <button
                        className='btn btn-primary'
                        onClick={editPerson}>
                        Edit
                    </button>
                </div>
                <div className='panel panel-body'>
                    <span style={{ float: 'left' }}>
                        Age:&nbsp;{personData.age}
                    </span>
                    <span style={{ float: 'right' }}>
                        Location:&nbsp;{personData.location}
                    </span>
                </div>
            </div>
        </div>
    );
}
PersonCard.propTypes = {
    personData: PropTypes.object.isRequired,
    editPerson: PropTypes.func.isRequired
}

export default memo(PersonCard);