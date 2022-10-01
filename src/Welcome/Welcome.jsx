
import React,{useState} from 'react'
import { Grid } from '@mui/material'
import {motion} from 'framer-motion';
import backgroundImage from "../images/index_img.jpg";
import PortIndex from '../PortIndex/PortindexPage';
import { Link } from 'react-router-dom';


function Welcome() {


  // css
    const WelocomePageContainer = {
      position:"relative",
      width: "100vw",
      height:"100vh",
      backgroundImage: `url("${ backgroundImage }")`,
      backgroundPosition: "center",
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
    }

    const gridStyle={
        position:"relative",
        left:"30vw",
        top:"70vh",
        width:"40vw",
        color:"black",
        display: "block",
        
       
    }


    const forscusStye =  {
      color:"red"
    }

    function goToAboutPage(){
      return <PortIndex/>
    }
  return (
   
    <motion.div style={WelocomePageContainer}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition:{duration:0.1}}}
    >
       <Grid container  style={gridStyle} >
            <Grid item  sx={{ fontSize:"2vw", maxHeight:"500px",overflow:"hidden",textOverflow: "clip"}}> 
                  Hi, <br/>
                  I am Liangku Lin <br/>
              <Link to="/portfolio/about" className='welcomePageAnimation'>    
                  Click here to start ->
              </Link>
              
            </Grid>
       </Grid>
    </motion.div>
  )
}

export default Welcome