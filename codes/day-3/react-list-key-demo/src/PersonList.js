import { Component } from "react";
import Person from "./Person";
import PersonCard from "./PersonCard";
import PersonEdit from "./PersonEdit";
import './PersonList.css'

export default class PersonList extends Component {
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
        if (!this.state.showEdit) {
            this.setState(ps => {
                return {
                    showEdit: true
                }
            })
        }
    }
    selectPersonHandler = (personId) => {
        let found = this.state.people.find(p => p.id === personId)
        //let copy = { ...found };
        this.setState({
            selectedPerson: found
        })
    }

    render() {
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
                <div className='divStyle'>
                    {
                        this.state.people.map((personObj, index) => {
                            return (
                                <Person
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
                        this.state.showEdit && (<PersonEdit personData={this.state.selectedPerson} />)
                    }
                </div>
            </div>
        );
    }
}