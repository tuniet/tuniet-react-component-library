import React, {useState} from 'react';
import Switch from './Switch';

function Modal(props) {
    const [toggled, settoggled] = useState(false)
  return (
    <div className='switch-comp component'>
        <h3>Switch</h3>
        <span>Click on button to switch text color</span>
        <Switch toggled = {toggled} settoggled={settoggled}/>
        <p style={toggled ? {color: "green"} : {color: "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}
export default Modal