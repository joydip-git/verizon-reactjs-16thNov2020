import PropTypes from 'prop-types'
import { Component } from 'react'

export default class PersonEdit extends Component {
    constructor() {
        super()

        console.log('[PE] ctor called')
    }
    static propTypes = {
        personData: PropTypes.object.isRequired,
        modify: PropTypes.func.isRequired
    }
    state = {
        person: null
    }

    static getDerivedStateFromProps(newProps, lastState) {
        //console.log(this.props)
        //return a new state or null
        //getRecords().then().catch()
        console.log('[PE] getDerivedStateFromProps')
        console.log(newProps)
        console.log(lastState)
        // if (lastState.person === null) {
        //     return {
        //         person: newProps.personData
        //     }
        // } else
        //     return null;
        return null;
    }

    shouldComponentUpdate(newProps, lastState) {
        return true;
    }
    updatePersonHandler = (propertyName, propertyValue) => {

        let copyOfPerson = { ...this.state.person };
        copyOfPerson[propertyName] = propertyValue;

        this.setState({
            person: copyOfPerson
        }, () => console.log(this.state))
    }

    passPersonToParent = (event) => {
        event.preventDefault()
        this.props.modify(this.state.person);
        //console.log(this.state.person)
    }

    componentDidMount() {
        console.log('[PE] mounted')
        //getData();
        this.setState((ps, props) => { return { person: props.personData } });
    }
    componentWillUnmount() {
        console.log('[PE] dismounted')
    }
    render() {
        //getData().then(this.setState({})).catch()
        console.log('[PE] rendered')
        console.log(this.state)
        const { person } = this.state;
        if (person !== null) {
            return (
                <div className='table-responsive'>
                    <form onSubmit={this.passPersonToParent}>
                        Id:&nbsp;
                <input type='text' value={person.id} readOnly />
                        <br />
                    Name:&nbsp;
                <input type='text' value={person.name}
                            onChange={(event) => this.updatePersonHandler('name', event.target.value)}
                        />
                        <br />
                Age:&nbsp;
                <input type='text' value={person.age}
                            onChange={(event) => this.updatePersonHandler('age', parseInt(event.target.value))}
                        />
                        <br />
                Location:&nbsp;
                <input type='text' value={person.location}
                            onChange={(event) => this.updatePersonHandler('location', event.target.value)}
                        />
                        <br />
                        <br />
                        <input type='submit' value='Edit' className='btn btn-danger' />
                    </form>
                </div>
            );
        }
        else return <span>no person</span>;
    }
}
// PersonEdit.propTypes = {
//     personData: PropTypes.object.isRequired
// }