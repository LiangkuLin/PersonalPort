import React, { useState,useEffect } from 'react';
import {motion} from 'framer-motion';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import myData from "../data.json";


function Works() {

    const theme = createTheme();
    let navigate = useNavigate();
  

    // style 
    const works = {
        backgroundColor: "#F8F8F8",
        height: "100vh",
        textAlign:" center",
        padding: "5vh",
    }


    theme.typography.h3 = {
        fontSize: '1.2rem',
        [theme.breakpoints.up('sm')]: {
          fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '2rem',
        },
      };

      theme.typography.p = {
        fontSize: '0.5rem',
        [theme.breakpoints.up('sm')]: {
          fontSize: '0.8rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '1.0rem',
        },
      };

    const gridStyle = {
      paddingTop:"20"
    }

    const onClickWorks = (data) =>{
      navigate("/portfolio/works/worksPage",{state:{work:data}}); 
    }


  
  
  return (
    <motion.div style={works}
    initial={{opacity:0}} 
    animate={{opacity:1}} 
    exit={{opacity:0, transition:{duration:0.1}}} 
    >

        <ThemeProvider theme={theme}>
        <Typography variant="h3">Works</Typography><br />
        <Typography variant="p"> These are all my works at Douglas college. </Typography>
        </ThemeProvider>

        <Grid2 container spacing={{xs:1,md:4}} direction="row" justifyContent="center"  paddingTop={10}>
            {myData.projects.map((data)=>
            <Grid2 key={data.id} onClick={()=>onClickWorks(data)}>
                 <Card sx={{ width: 250 }}>
                    <CardActionArea>
                      <CardMedia
                          component="img"
                          height="150"
                          image={data.image_urls.square_image}
                          alt=".picture"
                          style={{padding:15, backgroundColor:"#F0F0F0" }}
                      />
                      <CardContent sx={{height:130}}>
                          
                          <h6>{data.project_name}</h6>
                        
                          <span className="workComponentText">{data.HomePageDis}</span>
                          
                      </CardContent>
                    </CardActionArea>
                 </Card>
             </Grid2>
            )}
        </Grid2>

    </motion.div>
  )
}

export default Works