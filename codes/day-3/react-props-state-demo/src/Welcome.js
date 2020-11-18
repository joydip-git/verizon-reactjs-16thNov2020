import { Component } from 'react'

class Welcome extends Component {

    state = {
        count: 0,
        x: 100
    }

    countHandler = () => {

        this.setState(
            (lastState) => {
                return {
                    count: lastState.count + 1
                }
            },
            () => console.log(this.state)
        );

    }

    callPrint = () => {
        this.props.print(100);
    }

    render() {
        const { messageValue, data, show } = this.props;

        return (
            <div>
                Message:&nbsp;{messageValue}
                <br />
                Data:&nbsp;{data}
                <br />
                Show?&nbsp;{show.toString()}
                <br />
                <button onClick={this.callPrint}>Call Print</button>
                <br />
                Count:&nbsp;{this.state.count}
                <br />
                <button onClick={this.countHandler}>Change Count</button>
            </div>
        )
    }
}
export default Welcome;
