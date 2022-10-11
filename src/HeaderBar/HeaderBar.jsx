import React from 'react'
import { NavLink } from 'react-router-dom';


import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { width } from '@mui/system';
import { colors } from '@mui/material';


function HeaderBar() {

const logoStyle={
  width:10
}


const containerStyle={
    fontWeight:"bold",
    height: "100%",
    margin:"1vw",
    marginLeft:"5vw",
    marginRight:"10vw",
    height: 40,
    width: 400,
    
    
}






  return (

    <Grid container direction="row"  justifyContent="space-between"  alignItems="center"  className="mainContentStyle">
            <Grid container  alignItems="center" style={{color:"white"}}>
               <span className='logoStyle'>Liangku Lin</span> 
            </Grid>
            <Grid>  
            </Grid>
         
            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={containerStyle}>
              <Grid><NavLink className="nav_Link" style={({isActive})=>({color: isActive ? 'white' : 'white'})} to="/PersonalPort" >Welcome</NavLink></Grid>
              <Grid><NavLink  className="nav_Link" style={({isActive})=>({color: isActive ? '#808080' : 'white'})} to="/PersonalPort/about" >About</NavLink></Grid>
              <Grid><NavLink  className="nav_Link" style={({isActive})=>({color: isActive ? '#808080' : 'white'})} to="/PersonalPort/works">Works</NavLink></Grid>
              <Grid><NavLink  className="nav_Link"  style={({isActive})=>({color: isActive ? '#808080' : 'white'})}  to="/PersonalPort/contact">Contact</NavLink></Grid>
            </Grid>
    </Grid>
  )
}

export default HeaderBar