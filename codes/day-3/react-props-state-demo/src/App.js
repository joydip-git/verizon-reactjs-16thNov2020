import './App.css';
import Welcome from './Welcome';

function App() {

  let message = 'Welcome to class component';

  const printHandler = (value) => {
    console.log(value)
    window.alert('calling function...')
  }

  // const welcomeObj = new Welcome();
  // const welcomeElement  = welcomeObj.render();

  // console.log(welcomeObj)
  // console.log(welcomeElement)

  const welcomeElement = <Welcome messageValue={message} data={10} show={true} print={printHandler} />;
  // console.log(welcomeElement)

  return (
    <div className="App">
      Hello everyone
      <br />
      {welcomeElement}
    </div>
  );
}

export default App;
