import React from "react";
import "./styles.css";

export default function GrowthRate(props){
    return (
        
             
        <div className="gr-div">
        <span>
        <p className="gr-heading">{props.heading}</p> 
     
        </span>
        <hr/>
        <div className="gr-content">
        <p>
          {props.enter} :
        </p>
        
        <p style={{color:"lightblue",width:"69px",fontSize:"30px",border:"solid 2px lightblue",borderRadius:"5px"}}>
            {props.amount}
        </p>
      
      <p>{props.updated} {props.per}</p> 
      
        </div>
        </div>
    
    )
}