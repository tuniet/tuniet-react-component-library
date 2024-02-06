import './HoverCard.css'
import React  from "react";
 
function HoverCard(props){
  
    function Content(){
        return props.content
    }
    return (
        <div className="card">
            <div className='card-border' />
            <div className='img-box'>
                <img src={props.imgsrc} alt='card'/>
            </div>
            <Content /> 
        </div>
    );
  
}
export default HoverCard