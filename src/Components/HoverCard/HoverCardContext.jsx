import React  from "react";
import HoverCard from "./HoverCard";
import testimg from '../../testimg.webp'

function HoverCardContext(){
    function Content(){
        return (
            <div className='card-content'>
            <h2>Title goes here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante est, porta vitae tincidunt vitae, volutpat at ex.</p>
            </div>
        )
    }
    return (
        <div className="hovercard-comp component">
            <HoverCard content={Content()} imgsrc={testimg}/>
        </div>
    );
  
}
export default HoverCardContext