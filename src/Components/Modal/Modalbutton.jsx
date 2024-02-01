import React,  {useState, useEffect} from 'react';
import Modal from './Modal';

function Modalwithbutton(props) {
    const [modalactive, setmodalactive] = useState('');
    const [inmodal, setinmodal] = useState(false);
  
    useEffect(() => {
      if(inmodal){
        setmodalactive('modal-active')
      }
      else{
        setmodalactive('')
      }
    }, [inmodal])

    function handleopen(){
        setinmodal(true)
    }
    function handleclose(){
        setinmodal(false)
    }
  return (
    <div>
        <button onClick={handleopen}>OPEN MODAL</button>
        <div className={`overlay-bg ${modalactive}`} onClick={handleclose}></div>
        <Modal active = {modalactive} setinmodal={setinmodal}/>
    </div>
  );
}
export default Modalwithbutton