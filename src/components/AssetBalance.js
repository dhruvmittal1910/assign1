import React from "react";
import "./styles.css";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function AssetBalance(props){
    var d = new Date();
    var day=d.getDate();
    var m = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month=months[m.getMonth()];
    return (
        <div className="asset-div">
        <span>
        <p className="heading">{props.heading}</p> 
     
        </span>
        <hr/>
        <div className="content">
        <p>
          {props.enter} :
        </p>
        
        <p style={{color:"purple",backgroundColor:"#E7E8F2",width:"150px",fontSize:"30px"}}>
        <i class="fa fa-inr"></i>  {props.amount}
        </p>
      
      <p>{props.updated}  {day} {month} </p> 
      
        </div>
        </div>
    )
}

export default AssetBalance;