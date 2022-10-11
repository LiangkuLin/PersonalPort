
import React,{useState} from 'react'
import { Grid } from '@mui/material'
import {motion} from 'framer-motion';
import backgroundImage from "../images/index_img.jpg";
import PortIndex from '../PortIndex/PortindexPage';
import { NavLink } from 'react-router-dom';
import ForwardIcon from '@mui/icons-material/Forward';


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
        fontSize:"2vw",
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
       <div className='welcomeGridStyle'>
        Hi, <br/>
        I am Liangku Lin <br/>
        <NavLink  to="/PersonalPort/about" className='welcomePageArrowStyle'>    
                  Click here to start <ForwardIcon/>
        </NavLink>
       </div>

    </motion.div>
  )
}

export default Welcome