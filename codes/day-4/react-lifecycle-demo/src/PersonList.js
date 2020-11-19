import React, { Component } from 'react'
import { getPeople, updatePeople } from './data/peopleList'
import Person from './Person'
import PersonEdit from './PersonEdit'
import './PersonList.css'

export default class PersonList extends Component {
    constructor() {
        super()
        this.state = {
            people: [],
            selectedPersonId: 0
        }
        console.log('[PL] constructor called...')
    }

    static getDerivedStateFromProps(newProps, lastState) {
        console.log('[PL] getDerivedStateFromProps...')
        return null;
    }

    selectPersonHandler = (id) => {
        console.log('[PL] setting selectedperson id')
        this.setState({
            selectedPersonId: id
        })
    }

    updatePersonInfoHandler = (updatedPerson) => {
        let copyPeople = [...this.state.people];
        let index = copyPeople.findIndex(p => p.id === updatedPerson.id);
        copyPeople[index] = updatedPerson;

        updatePeople(copyPeople);
        this.setState({
            people: copyPeople
        })
    }

    render() {
        console.log('[PL] rendered...')
        return (
            <div>
                <div className='divStyle'>
                    {
                        this.state.people.length > 0 ? this.state.people.map(p => {
                            return <Person selectPerson={this.selectPersonHandler} personInfo={p} key={p.id} />
                        }) : <span>Loading...</span>
                    }
                </div>
                <div>
                    {
                        this.state.selectedPersonId > 0 && (
                            <PersonEdit personid={this.state.selectedPersonId} modify={this.updatePersonInfoHandler} />
                        )
                    }
                </div>
            </div>
        )
    }
    getSnapshotBeforeUpdate(oldProps, oldState) {
        console.log('[PL] getSnapshotBeforeUpdate')
        return 'Hi';
    }
    componentDidUpdate(oldProps, oldState, snapshot) {
        console.log('[PL] componentDidUpdate')
        console.log(snapshot)
    }
    componentDidMount() {
        console.log('[PL] mounted')
        let data = getPeople();
        this.setState({
            people: data
        })
    }
}
