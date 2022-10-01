import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import {motion} from 'framer-motion';
import Typography from '@mui/material/Typography';




function About() {

  

  // const imageStyle = {
  //   backgroundImage: `url("${ me }")`,
  //   backgroundPosition: "center",
  //   backgroundRepeat:"no-repeat",
  //   backgroundSize: "cover",
  //   width:"40vw",
  //   height: "70vh",
  //   marginLeft:"2vw",
  //   marginTop:"2vh",
  // }


 
  
  return (
    <motion.div className="aboutContainer"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0, transition:{duration:0.1}}}
    >
      <Grid container direction="row" rowSpacing={6} justifyContent="space-evenly">
        <Grid  container direction="column"  sm={12} md={6}>
          <Typography  variant="h5" gutterBottom>About me</Typography>
          <Typography>
          I am Liangku Lin from Taiwan. 
          I am a person who really interested in coding especially front-end developing. 
          In the past, I studied in civil engineering but I found that I was not into it. 
          As a result, I came to Canada to study computer science. 
          I am a person who are really hard-working. I love to do something different and learn something new. 
          It feels satisfied when I finished developing a project and turned the system into work. 
          </Typography>
          <hr/>
          <Typography  variant="h5" gutterBottom>Work experinece
       
          
          
          </Typography>
          
        </Grid>
        <Grid  sm={12} md={6} container  justifyContent="space-evenly" sx={{overflow:"hidden"}}>
          <img src="https://res.cloudinary.com/dxh3jlhil/image/upload/v1664640757/portFile_public/Try_nlax7b.jpg" alt=".img" className='aboutPicture'/>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default About