import React from 'react'


function ContactLogo() {

  const imageStyle = {
    marginTop:"10vh",
    height:"50vh",
    borderRadius:"50%"
  }


  return (
    <div className='logoAnimation'>
      <img src="https://res.cloudinary.com/dxh3jlhil/image/upload/v1664319159/portfolio_%20logo/Contact_logo_dhto4q.png" alt=".pic" style={imageStyle}/>
    </div>
  )
}

export default ContactLogo