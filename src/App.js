import './App.css';
import Modalcontext from './Components/Modal/Modalcontext';
import OffCanvascontext from './Components/OffCanvas/OffCanvascontext';
import DropdownSelectContext from './Components/DropdownSelect/DropdownSelectContext';
import Switchcontext from './Components/Switch/Switchcontext';
import HoverCardContext from './Components/HoverCard/HoverCardContext';

function App() {
  return (
    <div className="App">
        <h1>Tuniet React Component Library</h1>
      <div className='components'>
          <Modalcontext />          
          <Switchcontext />         
          <OffCanvascontext />
          <DropdownSelectContext />
          <HoverCardContext/>
      </div>
    </div>
  );
}

export default App;
