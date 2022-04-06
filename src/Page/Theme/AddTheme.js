import React from 'react'
import "./Styling.scss";
import { Button } from '@mui/material';
import kitchen from "../Images/kitchenImg.jpg";
import flowers from "../Images/flowers.jpg";
const AddTheme = () => {
  return (
    <div>
    <div className='bg'>
    <h3 style={{color:"white"}}>AddTheme</h3>
    <h6 style={{color:"white" ,textDecoration: "none" ,paddingLeft:"2rem",paddingTop:".6rem"}}>Food Menu</h6>
    <h6 style={{color:"white" ,textDecoration: "none" ,paddingLeft:"2rem",paddingTop:".6rem"}}>Add Add-ons</h6>
    <h6 style={{color:"white" ,textDecoration: "none" ,paddingLeft:"55rem",paddingTop:".6rem"}}>Logout</h6>
    </div>
    <div className='image'>
    <div className='line1'>
    <p className='text'>Enter Theme Name</p>
    <p className='text'>Enter The Image URL</p>
    <p className='text'>Enter Photographer Details</p>
    <img src={kitchen} alt="kitchen" className='img1'/>
    </div>
    <div className='line2'>
    <p className='text'>Enter Videographer Details</p>
    <p className='text'>Enter Theme Return Gift</p>
    <p className='text'>Enter Theme Cost</p>
    <p className='multi'>Enter Theme Description</p>
    </div>
    <div className='line3'>
    <img src={flowers} alt="flowers" className='img2'/>
    <Button className="btn">Add Theme</Button>
    </div>
    </div>
    </div>
  )
}

export default AddTheme