import { Component } from 'react'

class Welcome extends Component {

    callPrint = () => {
        this.props.print(100);
    }

    render() {
        //console.log(this.props)
        const { messageValue, data, show } = this.props;
        //this.props.data = this.props.data + 10; <-- not possible (properties are immutable)
        return (
            <div>
                Message:&nbsp;{messageValue}
                <br />
                Data:&nbsp;{data}
                <br />
                Show?&nbsp;{show.toString()}
                <br />
                <button onClick={this.callPrint}>Call Print</button>
            </div>
        )
    }
}
export default Welcome;
