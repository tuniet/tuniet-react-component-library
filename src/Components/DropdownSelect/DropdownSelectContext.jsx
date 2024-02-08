import React, {useState} from "react";
import DropdownSelect from "./DropdownSelect";
 
function SelectContext(){

  const [selected, setSelected] = useState('one');

return(
    <div className='select-comp component'>
      <h3>Select</h3>
      <span>Click on the box to display more options</span>
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