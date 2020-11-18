import { Component } from 'react';
import './App.css';
import Welcome from './Welcome';

class App extends Component {
  state = {
    message: 'Welcome to class component'
  }

  printHandler = (value) => {
    console.log(value)
    window.alert('calling function...')
  }

  changeMessageHandler = (newMessage) => {
    this.setState({
      message: newMessage
    })
  }


  render() {
    return (
      <div className="App">
        Hello everyone
        <br />
        <Welcome messageValue={this.state.message} data={10} show={true} print={this.printHandler} />;
        <br />
        <br />
        <button onClick={() => this.changeMessageHandler('welcome to state in class component')}>Change Mesaage</button>
      </div>
    );
  }
}

export default App;
