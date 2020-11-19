import './App.css';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function App() {
  /*
    const showClickCounter = (counterData, counterFn) => {
      return <ClickCounter counterValue={counterData} counterHandler={counterFn} data={10} />
    }
  
    const showHoverCounter = (counterData, counterFn) => {
      return <HoverCounter counter={counterData} handler={counterFn} value={20} />
    }
  */
  return (
    <div className="App">
      {/* <Counter show={showClickCounter} />
      <br />
      <br />
      <Counter show={showHoverCounter} /> */}
      <Counter render={(counterData, counterFn) => {
        return <ClickCounter counterValue={counterData} counterHandler={counterFn} data={10} />
      }} />
      <br />
      <br />
      <Counter render={(counterData, counterFn) => {
        return <HoverCounter counter={counterData} handler={counterFn} value={20} />
      }} />
    </div>
  );
}

export default App;
