import PropTypes from 'prop-types'

export default function PersonCard({ personData }) {
    return (
        <div className='container'>
            <div className='panel panel-primary'>
                <div className='panel panel-heading'>
                    Details of:&nbsp;{personData.name}
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
    personData: PropTypes.object.isRequired
}