import React,{useEffect, useState,useRef} from 'react'
import { useLocation,Route,Routes } from 'react-router-dom'
import { motion } from 'framer-motion';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Button from '@mui/material/Button';

import WorksGallery from './WorksGallery';

import { Typography } from '@mui/material';



function WorksPage() {


const location = useLocation();


// styling 
 const ButtonStyle={
  backgroundColor:"gray",
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'black',
    borderColor: '#0062cc',
    
  }
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
         <Typography variant="h4" >{location.state.work.project_name}</Typography>
          <hr/>
          <Typography varient="p">{location.state.work.description}</Typography>
        </Grid>
        <Grid xs={12} md={4} >
            <Typography ><strong>Skills: </strong></Typography>
            <ul>
              {location.state.work.technologies.map((eachSkill)=>
              <li key={eachSkill}>{eachSkill}</li>
              )}
            </ul>
            <br/>
            <Button variant="contained" sx={ButtonStyle} >github</Button>
        </Grid>
    </Grid>
    </motion.div>
    <WorksGallery/>
    </>
  )
}

export default WorksPage