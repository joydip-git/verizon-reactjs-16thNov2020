import withCounter from "./withCounter"

function OriginalHoverCounter(props) {
    return (
        <div>
            Value:&nbsp;{props.value}
            <br />
            Hover Counter Value:&nbsp;{props.counterValue}
            <br />
            <div onMouseOver={props.counterHandler}>Increase Counter By Hovering the Div</div>
        </div>
    )

}

const HoverCounter = withCounter(OriginalHoverCounter, 20);
export default HoverCounter;
