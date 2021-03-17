import React from "react";
import "./styles.css";
import Switch from '@material-ui/core/Switch';
import Grid from "@material-ui/core/Grid"
import { withStyles } from '@material-ui/core/styles';
export default function Financial(props){

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
      });

      const AntSwitch = withStyles((theme) => ({
        root: {
          width: 28,
          height: 16,
          padding: 0,
          display: 'flex',
        },
        switchBase: {
          padding: 2,
          color: theme.palette.grey[500],
          '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
              opacity: 1,
              backgroundColor: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
            },
          },
        },
        thumb: {
          width: 12,
          height: 12,
          boxShadow: 'none',
        },
        track: {
          border: `1px solid ${theme.palette.grey[500]}`,
          borderRadius: 16 / 2,
          opacity: 1,
          backgroundColor: theme.palette.common.white,
        },
        checked: {},
      }))(Switch);
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return (
      
        <div className="financial-div">
        <span>
        <p className="fin-heading">{props.heading}</p> 
     
        </span>
        <hr/>
        <div className="fin-content">
        <p>
          {props.enter} :
        </p>
        
        <p style={{color:"purple",width:"150px",fontSize:"30px"}}>
            {props.amount}
        </p>
      
      <p>{props.updated} </p> 
      <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>No</Grid>
          <Grid item>
            <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
          </Grid>
          <Grid item>Yes</Grid>
        </Grid>
       
      
        </div>
        </div>

    )
}