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
    <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0, transition:{duration:0.1}}}
    >
      <div className='aboutContainer'>
      <Grid container direction="row" rowSpacing={6} justifyContent="space-evenly">
        <Grid  container direction="column"  sm={12} md={6}>
          <Typography  variant="h5" gutterBottom>About me</Typography>
          <Typography>
          Passionate junior front-end developer with a strong desire to work in the real workplace. 
          Skilled in CSS, HTML and JavaScript. Familiar with React and have little experience in Vue. 
          Hope can implement these skills in the collaborative environment. 
          </Typography>
          <hr/>
          <Typography  variant="h5" gutterBottom>Work experinece  </Typography>
            
          <Typography>
          <h6>CSIS Computer Lab Student Assistant </h6>  
          <h6 className='dateFormat'>May, 2022 - December, 2022 </h6>  
          <h6>Douglas college  </h6>  
          </Typography>
          <Typography>
          Course 1280 (web development) (HTML, CSS, JavaScript)
          <ul>
            <li>Help students to build the knowledge of HTML & CSS & JavaScript</li>
            <li>Fix bugs in javascript which made by students in class  </li>
            <li>Guide students to finish their assignments well </li>
          </ul>
          </Typography>
          <Typography>
          Course 1175 (introduction of programming) (C#)
          <ul>
            <li>Help students to build the knowledge of basic programming in C#</li>
            <li>Fix bugs and lead students to finish the class demos and assignments </li>
            <li>Assist students review exam and assignments contents to ensure they back on track </li>
          </ul>
          </Typography>
          <Typography>
          Open lab assistant
          <ul>
            <li>Help students to solve any questions based on computer science fundamental courses at Douglas  (e.g.  all courses provided with 1xxx and 2xxx ) </li>
            <li>Provide the idea / suggestion of students' project based on the courses they were taken</li>
          </ul>
          </Typography>
          
        </Grid>
        <Grid  sm={12} md={6} container  justifyContent="center"  alignItems="center" sx={{overflow:"hidden"}}>
          <img src="https://res.cloudinary.com/dxh3jlhil/image/upload/v1664640757/portFile_public/Try_nlax7b.jpg" alt=".img" className='aboutPicture'/>
        </Grid>
      </Grid>
      </div>
    </motion.div>
  )
}

export default About