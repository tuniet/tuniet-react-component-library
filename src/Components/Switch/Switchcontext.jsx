import React, {useState} from 'react';
import Switch from './Switch';

function Modal(props) {
    const [toggled, settoggled] = useState(false)
  return (
    <div>
        <Switch toggled = {toggled} settoggled={settoggled}/>
        <p style={toggled ? {color: "green"} : {color: "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}
export default Modal