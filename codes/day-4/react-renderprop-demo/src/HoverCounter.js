import PropTypes from 'prop-types'
function HoverCounter(props) {
    return (
        <div>
            Value:&nbsp;{props.value}
            <br />
            Hover Counter Value:&nbsp;{props.counter}
            <br />
            <div onMouseOver={props.handler}>Increase Counter By Hovering the Div</div>
        </div>
    )

}
HoverCounter.propTypes = {
    counter: PropTypes.number.isRequired,
    handler: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}
export default HoverCounter;
