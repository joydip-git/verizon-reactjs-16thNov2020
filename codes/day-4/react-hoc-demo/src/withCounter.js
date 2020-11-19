import { Component } from "react";

const withCounter = (OriginalComponent, initialState) => {

    class WithCounter extends Component {
        state = {
            counter: initialState
        }

        increaseCounterHandler = () => {
            this.setState(ps => {
                return {
                    counter: ps.counter + 1
                }
            })
        }

        render() {
            // console.log(this.props.data)
            // console.log(this.props.value)

            return <OriginalComponent

                counterValue={this.state.counter}
                counterHandler={this.increaseCounterHandler}
                {...this.props}
            />
        }
    }
    return WithCounter;

}
export default withCounter;

/*
const withMemo = (OC) => {
    class WithMemo extends Component {
        shouldComponentUpdate(newProps, oldState) {
            for (let propName in newProps) {
                if (this.props[propName] !== newProps[propName])
                    return true;
            }
            return false;
        }
        render() {
            return <OC {...this.props} />
        }
    }
    return WithMemo;
}

function OriginalPerson({ peronInfo }) {
    return null;
}
const PersonHOC = withMemo(OriginalPerson)

const PL = () => {
    return <PersonHOC personInfo={{ name: 'anil' }} />
}
*/