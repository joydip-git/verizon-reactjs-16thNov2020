import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getPeopleById } from './data/peopleList'

export default class PersonEdit extends Component {
    constructor() {
        super()
        console.log('[PE] ctor called')
        this.state = {
            person: null
        }
        //this.props
    }

    static propTypes = {
        personid: PropTypes.object.isRequired,
        modify: PropTypes.func.isRequired
    }

    updatePersonHandler = (propertyName, propertyValue) => {
        console.log('[PE] updating person ' + propertyName)
        let copyPerson = { ...this.state.person }
        copyPerson[propertyName] = propertyValue;
        this.setState({
            person: copyPerson
        })
    }

    submitPersonHandler = (event) => {
        event.preventDefault()
        this.props.modify(this.state.person);
    }

    static getDerivedStateFromProps(newProps, lastState) {
        console.log('[PE] getDerivedStateFromProps...')
        console.log(newProps)
        return null;
    }

    shouldComponentUpdate(newProps, oldState) {
        console.log('[PE] shouldComponentUpdate...')
        console.log(newProps)
        console.log(this.props)
        console.log(oldState)
        console.log(this.state)

        if (this.state.person !== null && (newProps.personid === this.props.personid && oldState.person.id === this.state.personid)) {
            return false;
        } else
            return true;
    }
    render() {
        console.log('[PE] rendered')
        const { person } = this.state;
        if (person !== null) {
            return (
                <form onSubmit={this.submitPersonHandler}>
                    Id:&nbsp;
                    <input type='text' value={person.id} readOnly />
                    <br />
                    Name:&nbsp;
                    <input type='text' value={person.name} onChange={(event) => this.updatePersonHandler('name', event.target.value)} />
                    <br />
                    Age:&nbsp;
                    <input type='text' value={person.age} onChange={(event) => this.updatePersonHandler('age', parseInt(event.target.value))} />
                    <br />
                    Location:&nbsp;
                    <input type='text' value={person.location} onChange={(event) => this.updatePersonHandler('location', event.target.value)} />
                    <br />
                    <input type='submit' value='Update' style={{ backgroundColor: 'burlywood' }} />
                </form>
            )
        }
        else
            return <span>not found yet...</span>
    }

    componentDidUpdate(oldProps, oldState, snapshot) {
        console.log('[PE] update')
        console.log(oldProps)
        console.log(this.props)
        if (this.props.personid !== oldProps.personid)
            this.getData()
    }

    componentDidMount() {
        console.log('[PE] mounted')
        this.getData()
    }
    getData = () => {
        let found = getPeopleById(this.props.personid);
        if (found !== undefined && found !== null) {
            this.setState({
                person: found
            })
        }
    }
}
