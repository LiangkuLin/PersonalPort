import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Button from '@mui/material/Button';

import { Typography } from '@mui/material';

function WorksPage(id) {
const location = useLocation();


 const ButtonStyle={
  backgroundColor:"gray",
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'black',
    borderColor: '#0062cc',
    
  }


 }

  return (
    <motion.div
    initial={{opacity:0}} // 初始狀態
    animate={{opacity:1}} // 接續動畫
    exit={{opacity:0, transition:{duration:0.1}}} // 離開動畫
    >

    <Grid container direction="row" justifyContent="space-around"  sx={{margin:3, marginTop:8}}>
        <Grid xs={5} md={7} >
         <Typography variant="h4" >{location.state.work.project_name}</Typography>
          <hr/>
          <Typography varient="p">{location.state.work.description}</Typography>
        </Grid>
        <Grid xs={4} md={4} >
            <Typography >Skills: </Typography>
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
  )
}

export default WorksPage