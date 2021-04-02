import React from 'react';
import {Typography, InputBase } from "@material-ui/core";

import logo from '../../assets/Footer_9.png';
import logo1 from '../../assets/logo9.png';
import logo2 from '../../assets/Rectangle (1).png';
import logo3 from "../../assets/Group 5.png"


const Footer = () => {
    return (
        <>
        <div className='img-footer'>
            <img className='logo2Image' src={logo2} alt=''/>
        <div className='text_footer'>
            <h4 style={{color:'#F2994A'}} className='text-body'>There are many reasons to get down</h4>
        </div>
        </div>
        <Typography className='txt-footer' style={{color:'#95A1BB'}}>There are many reasons to get down and start to get depressed about your situation. </Typography>
        <div className='logo99-img'>
               <img className='logo99-img' src={logo3} alt='' />
           </div>
         <div className='login-in'>
        <form action="/" >
       <input style=
       {{width: '300px',
       height: '45px',
       borderRadius:'3px',
       opacity:'4px'
       }} 
       type="email" id="email" 
       name="email" 
       className='input'
       />
        <input className='sumbit'
         style={{backgroundColor:'#F2994A', 
         color: '#fff' ,
          padding:'1.5%', 
          display:'inline-flex',
          borderRadius:'3px',
          left:'30%'

          }} 
          type="submit" 
          />
      </form>
         </div>
         <Typography className='txt-discount' style={{
           color:'#95A1BB',
           fontFamily: 'Rubik', 
         }}>
         No spam. Only releases, updates and discounts
         </Typography>
         <div className='help-cover'>
            <h3 className='help'>Help Finding Information Online</h3>
         </div>
        <div className='img_footer'>
            <img className='ending-img' src={logo} alt='....sourceFile' />
        </div>
        <div className='image_footer'>
            <img className='color' src={logo1} alt='......sourceFile' />
        </div>
        </>
    )
}

export default Footer
