import React from "react";
import "./styles.css";

export default function AvgExpenses(props){
    return (
        <div className="avg-div">
        <span>
        <p className="avg-heading">{props.heading}</p> 
     
        </span>
        <hr/>
        <div className="avg-content">
        <p>
          {props.enter} :
        </p>
        
        <p style={{color:"lightblue",width:"150px",fontSize:"30px"}}>
        <i class="fa fa-inr"></i>  {props.amount}
        </p>
      
      <p>{props.updated}  </p> 
      
        </div>
        </div>
    
    )
}