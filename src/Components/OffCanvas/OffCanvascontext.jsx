import './OffCanvas.css'
import OffCanvas from './OffCanvas'
 import React, {useState, useEffect} from 'react'

function OffCanvascontext(props){
    const [offcanvasact, setoffcanvasact] = useState('');
    const [incanvas, setincanvas] = useState(false);
  
    useEffect(() => {
      if(incanvas){
        setoffcanvasact('offcanvas-active')
      }
      else{
        setoffcanvasact('')
      }
    }, [incanvas])

    function handleopen(){
        setincanvas(true)
    }

    function handleclose(){
        setincanvas(false)
    }

    function Content(){
      return(
        <div className='offcanvas-content'>
          <h2 className='offcanvas-title'>TITLE</h2>
          <p className='offcanvas-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet ligula laoreet, euismod felis pellentesque, iaculis orci. Quisque hendrerit orci lacus, eleifend consequat mi egestas id. Etiam nunc arcu, dignissim vitae urna in, mattis efficitur erat. Cras vel leo a nisi interdum sodales vel quis tortor. Fusce posuere pulvinar mollis. Suspendisse at metus vitae nibh viverra venenatis ut a eros. Ut ac commodo nibh. Pellentesque nec placerat orci, id aliquam augue. Cras non luctus lacus. Integer ac velit sed eros dapibus tincidunt.</p>
        </div>
      )
    }

    return(
    <div className='offcanvas-comp component'>
        <h3>Off-canvas</h3>
        <span>Click on button to open off-canvas</span>
        <button onClick={handleopen}>OPEN OFFCANVAS</button>
        <div className={`overlay-bg ${offcanvasact}`} onClick={handleclose}></div>
        <OffCanvas setincanvas={setincanvas} active = {offcanvasact} content = {Content()}/>
    </div> 
    )
}
export default OffCanvascontext