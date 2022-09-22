import React from 'react'
import { Grid } from '@mui/material'
import {motion} from 'framer-motion';
import backgroundImage from "../images/index_img.jpg";



function Welcome() {

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
        left:"20vw",
        top:"70vh",
        width:"40vw",
        color:"#F8F9F9",
        display: "block",
       
    }

  return (
    <motion.div style={WelocomePageContainer}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition:{duration:0.1}}}
    >
       <Grid container style={gridStyle}>
            <Grid item  sx={{ fontSize:"2vw", maxHeight:"500px",overflow:"hidden",textOverflow: "clip"}}>
                Hi, <br/>
                I am LiangKu Lin <br/>
                A junior web developer ->  <br/>
            </Grid>
       </Grid>
    </motion.div>
  )
}

export default Welcome