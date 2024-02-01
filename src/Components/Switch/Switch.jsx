import './Switch.css'
import React from "react";
 
function Switch(props){

function handleToggle(){
    props.settoggled(!props.toggled)
}
return(
    <div className="toggle-switch">
        <label className="switch">
            <input name='switch' type="checkbox" checked={props.toggled} onChange={handleToggle} />
            <span className="slider"></span>
        </label>
    </div>  
)
}
export default Switch