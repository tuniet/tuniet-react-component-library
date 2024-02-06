import React,  {useState, useEffect} from 'react';
import Modal from './Modal';

function Modalcontext(props) {
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
    function Content(){
      return(
        <div className='modal-content'>
          <h2 className='modal-title'>TITLE</h2>
          <p className='modal-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet ligula laoreet, euismod felis pellentesque, iaculis orci. Quisque hendrerit orci lacus, eleifend consequat mi egestas id. Etiam nunc arcu, dignissim vitae urna in, mattis efficitur erat. Cras vel leo a nisi interdum sodales vel quis tortor. Fusce posuere pulvinar mollis. Suspendisse at metus vitae nibh viverra venenatis ut a eros. Ut ac commodo nibh. Pellentesque nec placerat orci, id aliquam augue. Cras non luctus lacus. Integer ac velit sed eros dapibus tincidunt.</p>
        </div>
      )
    }
  return (
    <div className='modal-comp component'>
        <h3>Modal</h3>
        <span>Click on button to open modal</span>
        <button onClick={handleopen}>OPEN MODAL</button>
        <div className={`overlay-bg ${modalactive}`} onClick={handleclose}></div>
        <Modal active = {modalactive} setinmodal={setinmodal} content = {Content()}/>
    </div>
  );
}
export default Modalcontext