import React,{useEffect, useState,useRef} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Button from '@mui/material/Button';

import WorksGallery from './WorksGallery';

import { Typography } from '@mui/material';



function WorksPage() {


const location = useLocation();
const navigate =  useNavigate();

// styling 
 const ButtonStyle={
  backgroundColor:"gray",
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'black',
    borderColor: '#0062cc',
    
  }
 }

 const aStyle = {
    color:"white",
    textDecoration: "none" 
 }




  return (
    <>
    <motion.div
    initial={{opacity:0}} 
    animate={{opacity:1}} 
    exit={{opacity:0, transition:{duration:0.1}}} 
    >
    <Grid container direction="row" justifyContent="space-around" spacing={{xs:7}} sx={{margin:3, marginTop:8}}>
        <Grid xs={12} md={7} >
         <h4>{location.state.work.project_name}</h4>
          <hr/>
          {location.state.work.description}
        </Grid>
        <Grid xs={12} md={4}>
            <h6>Skills:</h6>
            <ul>
              {location.state.work.technologies.map((eachSkill)=>
              <li key={eachSkill}>{eachSkill}</li>
              )}
            </ul>
            <br/>
            <Button variant="contained" sx={ButtonStyle}> 
            <a href={location.state.work.git_Repo} style={aStyle}>
              github
            </a>
            </Button>
            <br/><br/>
            {location.state.work.git_live_demo&&(
              <Button variant="contained" sx={ButtonStyle}> 
              <a href={location.state.work.git_live_demo} style={aStyle}>
                live Demo
              </a>
              </Button>
            )}
        </Grid>
    </Grid>
    </motion.div>
    <WorksGallery/>
    </>
  )
}

export default WorksPage