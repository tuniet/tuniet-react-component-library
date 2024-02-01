import './App.css';
import Modalcontext from './Components/Modal/Modalcontext';
import Switchcontext from './Components/Switch/Switchcontext';

function App() {
  return (
    <div className="App">
        <h1>Tuniet React Component Library</h1>
      <div className='components'>
        <div className='modal component'>
          <h3>Modal</h3>
          <span>Click on button to open modal</span>
          <Modalcontext />
        </div>
        <div className='switch-comp component'>
          <h3>Switch</h3>
          <span>Click on button to switch text color</span>
          <Switchcontext />
        </div>
      </div>
      
    </div>
  );
}

export default App;
