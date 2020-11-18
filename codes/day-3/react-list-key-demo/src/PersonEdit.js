import PropTypes from 'prop-types'
import { Component } from 'react'

export default class PersonEdit extends Component {
    // constructor() {
    //     super()
    // }
    static propTypes = {
        personData: PropTypes.object.isRequired
    }
    state = {
        person: null
    }

    static getDerivedStateFromProps(newProps, lastState) {
        //console.log(this.props)
        //return a new state or null

        console.log('getDerivedStateFromProps')
        console.log(newProps)
        console.log(lastState)
        if (lastState.person === null) {
            return {
                person: newProps.personData
            }
        } else
            return null;
    }

    updatePersonHandler = (propertyName, propertyValue) => {

        let copyOfPerson = { ...this.state.person };
        copyOfPerson[propertyName] = propertyValue;

        this.setState({
            person: copyOfPerson
        }, () => console.log(this.state))
    }

    render() {
        console.log(this.state)
        const { person } = this.state;

        return (
            <div className='table-responsive'>
                <form>
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
}
// PersonEdit.propTypes = {
//     personData: PropTypes.object.isRequired
// }