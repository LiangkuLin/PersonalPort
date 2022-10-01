import React from 'react'
import { NavLink } from 'react-router-dom';


import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { width } from '@mui/system';


function HeaderBar() {

const logoStyle={
  width:10
}

const mainContentStyle = {
  backgroundColor:"#F0F0F0"
}

const containerStyle={
    backgroundColor:'',
    height: "100%",
    margin:"1vw",
    marginLeft:"5vw",
    marginRight:"10vw",
    height: 40,
    width: 400,
    
}

const navStyle ={
    paddingTop:'3vh',
    paddingLeft:"0px",
    fontSize:'0.2rem'
};



  return (

    <Grid container direction="row"  justifyContent="space-between"  alignItems="center"  sx={mainContentStyle}>
            <Grid container  alignItems="center" sx={containerStyle}>
                Liangku Lin
            </Grid>
            <Grid>
            </Grid>
         
            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={containerStyle}>
              <Grid><NavLink to="/portfolio">Welcome</NavLink></Grid>
              <Grid><NavLink to="/portfolio/about">About</NavLink></Grid>
              <Grid><NavLink to="/portfolio/works">Works</NavLink></Grid>
              <Grid><NavLink to="/portfolio/contact">Contact</NavLink></Grid>
            </Grid>
    </Grid>
  )
}

export default HeaderBar