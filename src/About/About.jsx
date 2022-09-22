import React from 'react'
import me from '../images/me.jpg'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import {motion} from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';



function About() {

  

  const imageStyle = {
    backgroundImage: `url("${ me }")`,
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    width:"40vw",
    height: "70vh",
    marginLeft:"2vw",
    marginTop:"2vh",
  }


  
  return (
    <motion.div className="aboutContainer"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0, transition:{duration:0.1}}}
    >
      <Grid container direction="row" justifyContent="space-evenly">
        <Grid container direction="column" width="40%">
          <Typography  variant="h5" gutterBottom>About me</Typography>
          <Typography>
          Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
          
          </Typography>
        </Grid>
        <Grid style={imageStyle} >
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default About