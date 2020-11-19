import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

function App() {
  const logError = (error, errorStack) => {
    console.log(error)
    console.log(errorStack)
  }
  return (
    <div className="App">
      <ErrorBoundary errorhandler={logError}>
        <Hero heroName='Batman' />
        <Hero heroName='Joker' />
      </ErrorBoundary>
    </div>
  );
}

export default App;
