import React, {useState} from "react";
import DropdownSelect from "./DropdownSelect";
 
function SelectContext(){

    const [selected, setSelected] = useState('one');
  
    const handleselchange = (e) => {
      setSelected(e.target.value);
    };

return(
    <div>
      <DropdownSelect
        title="Select a number"
        options={["uno", "dos", "tres"]}
        placeholder="select a number"
        setSelected = {setSelected}
      />
      <p>You have selected: {selected}</p>
    </div> 
)
}
export default SelectContext