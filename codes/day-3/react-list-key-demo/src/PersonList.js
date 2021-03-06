import { Component } from "react";
import Person from "./Person";
import PersonCard from "./PersonCard";
import PersonEdit from "./PersonEdit";
import './PersonList.css'

export default class PersonList extends Component {

    constructor() {
        super()
        console.log('[PL] rendered')
    }

    //#region State Data
    state = {
        people: [
            {
                name: 'anil',
                id: 1,
                age: 20,
                location: 'chennai'
            },
            {
                name: 'sunil',
                id: 2,
                age: 30,
                location: 'hyderabad'
            },
            {
                name: 'mahesh',
                id: 3,
                age: 40,
                location: 'bangalore'
            }
        ],
        selectedPerson: null,
        showEdit: false
    }
    //#endregion

    changeShowEditHandler = () => {

        //console.log(this)
        this.setState(ps => {
            return {
                showEdit: !ps.showEdit
            }
        })
    }

    selectPersonHandler = (personId) => {
        let found = this.state.people.find(p => p.id === personId)
        //let copy = { ...found };
        this.setState({
            selectedPerson: found
        })
    }

    modifyPersonHandler = (newPerson) => {

        let copyOfPeople = [...this.state.people]
        let foundIndex = copyOfPeople.findIndex(p => p.id === newPerson.id);

        copyOfPeople[foundIndex] = newPerson;
        this.setState({
            people: copyOfPeople,
            selectedPerson: newPerson
        })
    }

    render() {
        //this.changeShowEditHandler();
        // const divStyle = {
        //     width: '100px',
        //     height: '100px',
        //     backgroundColor: 'azure',
        //     fontFamily: 'Segoe UI',
        //     fontSize: 'medium',
        //     border: '2px solid black',
        //     margin: '10px'
        // }

        return (
            // <div style={divStyle}>
            <div>
                <button onClick={this.changeShowEditHandler}>Click</button>
                <br />
                <div className='divStyle'>
                    {
                        this.state.people.map((personObj, index) => {
                            return (
                                <Person key={personObj.id}
                                    personInfo={personObj}
                                    selectPerson={this.selectPersonHandler}
                                />
                            )
                        })
                    }
                </div>
                {
                    this.state.selectedPerson !== null ?
                        (<PersonCard
                            personData={this.state.selectedPerson}
                            editPerson={this.changeShowEditHandler}
                        />)
                        :
                        (<span>Select a Person</span>)
                }
                <div>
                    {
                        this.state.showEdit && (<PersonEdit personData={this.state.selectedPerson} modify={this.modifyPersonHandler} />)
                    }
                </div>
            </div>
        );
    }
}