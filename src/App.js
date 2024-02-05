import './App.css';
import Modalcontext from './Components/Modal/Modalcontext';
import OffCanvascontext from './Components/OffCanvas/OffCanvascontext';
import DropdownSelectContext from './Components/DropdownSelect/DropdownSelectContext';
import Switchcontext from './Components/Switch/Switchcontext';

function App() {
  return (
    <div className="App">
        <h1>Tuniet React Component Library</h1>
      <div className='components'>
        <div className='modal-comp component'>
          <h3>Modal</h3>
          <span>Click on button to open modal</span>
          <Modalcontext />
        </div>
        <div className='switch-comp component'>
          <h3>Switch</h3>
          <span>Click on button to switch text color</span>
          <Switchcontext />
        </div>
        <div className='offcanvas-comp component'>
          <h3>Off-canvas</h3>
          <span>Click on button to open off-canvas</span>
          <OffCanvascontext />
        </div>
        <div className='select-comp component'>
          <h3>Select</h3>
          <span>Click on the box to display more options</span>
          <DropdownSelectContext />
        </div>
      </div>
      
    </div>
  );
}

export default App;
