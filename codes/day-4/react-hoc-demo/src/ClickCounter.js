import withCounter from "./withCounter"

function OriginalClickCounter(props) {
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

const ClickCounter = withCounter(OriginalClickCounter, 10);
export default ClickCounter;