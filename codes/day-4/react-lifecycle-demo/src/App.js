import './App.css';
import PersonList from './PersonList';

function App() {
  console.log('[App] rendered...')
  return (
    <div className="App">
      <PersonList />
    </div>
  );
}

export default App;
