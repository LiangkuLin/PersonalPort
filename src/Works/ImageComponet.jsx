import React, { useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

function ImageComponet(props) {
  



  return (

 <div>
     <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {props.url&& <img src={props.url} alt="image" style={{height:"50vh"}} />}
    </Grid>
  </div>
  )
}

export default ImageComponet