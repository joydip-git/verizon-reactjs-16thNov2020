import './App.css';
import Welcome from './Welcome';

function App() {
  // const welcomeObj = new Welcome();
  // const welcomeElement = welcomeObj.render();

  //const welcomeElement = new Welcome({messageValue:'Welcome to functional component', data:10, show:true, print:() => {
  //   window.alert('calling function...')
  // }});
  let message = 'Welcome to functional component';
  const printHandler = (value) => {
    //console.log(e)
    console.log(value)
    window.alert('calling function...')
  }

  const welcomeElement = <Welcome messageValue={message} data={10} show={true} print={printHandler} />;
  console.log(welcomeElement)
  
  return (
    <div className="App">
      Hello everyone
      <br />
      {welcomeElement}
    </div>
  );
}

export default App;
