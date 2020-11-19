import PropTypes from 'prop-types'
function ClickCounter(props) {
    return (
        <div>
            Data:&nbsp;{props.data}
            <br />
            Click Counter Value:&nbsp;{props.counterValue}
            <br />
            <button onClick={props.counterHandler}>Increase Counter By Clicking the Button</button>
        </div>
    )
}
ClickCounter.propTypes = {
    counterValue: PropTypes.number.isRequired,
    counterHandler: PropTypes.func.isRequired,
    data: PropTypes.number.isRequired
}
export default ClickCounter;