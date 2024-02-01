import './Modal.css';
import React from 'react';
import { IoMdClose } from "react-icons/io";

function Modal(props) {

    function handleClose() {
        props.setinmodal(false);
    }

  return (
    <div className={`contact-modal ${props.active}`}>
        <span className='modal-close-button' onClick={handleClose}><IoMdClose /></span>
        <h2 className='modal-title'>TITLE</h2>
        <p className='modal-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet ligula laoreet, euismod felis pellentesque, iaculis orci. Quisque hendrerit orci lacus, eleifend consequat mi egestas id. Etiam nunc arcu, dignissim vitae urna in, mattis efficitur erat. Cras vel leo a nisi interdum sodales vel quis tortor. Fusce posuere pulvinar mollis. Suspendisse at metus vitae nibh viverra venenatis ut a eros. Ut ac commodo nibh. Pellentesque nec placerat orci, id aliquam augue. Cras non luctus lacus. Integer ac velit sed eros dapibus tincidunt.</p>
        
    </div>
  );
}
export default Modal