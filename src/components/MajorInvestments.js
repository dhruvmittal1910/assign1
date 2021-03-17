import React from "react";
import "./styles.css";

export default function MajorInvestments(props){
    return (
        
             
        <div className="major-div">
        <span>
        <p className="major-heading">{props.heading}</p> 
     
        </span>
        <hr/>
        <div className="major-content">
        <p>
          {props.enter} :
        </p>
        
        <p style={{color:"purple",width:"150px",fontSize:"30px"}}>
        <i class="fa fa-inr"></i>    {props.amount}
        </p>
      
      <p>{props.updated}  </p> 
      
        </div>
        </div>
    
    )
}