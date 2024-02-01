import './App.css';
import Modalwithbutton from './Components/Modal/Modalbutton';

function App() {
  return (
    <div className="App">
        <h1>Tuniet React Component Library</h1>
      <div className='components'>
        <div className='component modal'>
          <h3>Modal</h3>
          <span>Click on button to open modal</span>
          <Modalwithbutton />
        </div>
      </div>
      
    </div>
  );
}

export default App;
