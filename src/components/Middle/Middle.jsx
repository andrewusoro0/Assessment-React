import React from 'react';
import { Typography, Button } from "@material-ui/core";

import logo from "../../assets/Group.png";
import logo1 from '../../assets/Frame.png';
import logo2 from "../../assets/Mask.png"
import logo3 from "../../assets/Rectangle.png"
import logo4 from "../../assets/logo4.png"
import logo5 from "../../assets/logo5.png"
import logo6 from "../../assets/Group 5.png"
import logo7 from "../../assets/Path.png"
import logo8 from "../../assets/Group 9.png"


const Middle = () => {
    return (
        <>
          <main className='section-all'>
          <div className='bg-img'>
              <img src={logo1} alt=''  />
          </div>
          <div className='bg-image'>
              <img src={logo} alt='' style={{width:'80%', marginLeft:'200px'}} />
          </div>
           <div className='txt-choice'>
            <h1 className='choice'>Your choice</h1>
            </div>
            <Typography className='txt_reason' style={{
                color:'#8476AA',
                marginTop:'20px',
                marginLeft:'30%',
                fontSize: '16px',
                fontFamily: 'Rubik'
            }}>
            There are many reasons to get down and start to get depressed about your situation.
             </Typography>

            <div className='grid'>
            <div>
            <h4 style={{color:'#99EFD0'}}>Ecstatic elegance</h4>
            <Typography className='txt_Article'>Article nor prepare chicken you him now. 
             Shy merits say advice ten before lovers innate add.</Typography> 
            </div>

            <div>
            <h4 style={{color:'#99EFD0'}}>Ecstatic elegance</h4>
            <Typography className='txt_Article'>Article nor prepare chicken you him now.
             Shy merits say advice ten before lovers innate add.</Typography> 
            </div>

            <div>
            <h4 style={{color:'#99EFD0'}}>Ecstatic elegance</h4>
            <Typography className='txt_Article'>Article nor prepare chicken you him now. 
             Shy merits say advice ten before lovers innate add.</Typography> 
            </div>

            <div>
            <h4 style={{color:'#99EFD0'}}>Ecstatic elegance</h4>
            <Typography className='txt_Article'>Article nor prepare chicken you him now. 
             Shy merits say advice ten before lovers innate add.</Typography> 
            </div>

            <div>
            <h4 style={{color:'#99EFD0'}}>Ecstatic elegance</h4>
            <Typography className='txt_Article'>Article nor prepare chicken you him now. 
             Shy merits say advice ten before lovers innate add.
            </Typography> 
            </div>

            <div>
            <h4 style={{color:'#99EFD0'}}>Ecstatic elegance</h4>
            <Typography className='txt_Article'>Article nor prepare chicken you him now.<br/> 
            Shy merits say advice ten before lovers innate add.
            </Typography> 
            </div>

           </div>

           <div className='increase'>
           <h1 className='txt-increase'>Increase your business</h1>
           </div>
           <div className='txt-commit'>
           <Typography style={{position: 'absolute',top: '205%', left: '17%', color: '#8476AA'}}>We are committed to processing the information in order to </Typography>
           <Typography style={{position: 'absolute',top: '209%', left: '17%', color: '#8476AA'}}> contact you and talk about your project. </Typography>
           </div>
           <Button className='btn-middle' variant="contained" style={{background:'#F2994A', color:'#fff'}} > learn more</Button>
           <div className='logo3-img'>
               <img className='logo33-img' src={logo3} alt='' />
           </div>
           <div className='logo4-img'>
               <img src={logo4} alt='' />
           </div>
           <div className='logo2-img'>
               <img className='logo-image' src={logo2} alt='' />
           </div>
           <div className='logo5-img'>
               <img src={logo6} alt='' />
           </div>
           <div className='logo6-img'>
               <img src={logo5} alt='' />
           </div>
           <div className='logo7-img'>
               <img src={logo7} alt='' />
           </div>
           <div className='logo8-img'>
               <img src={logo8} alt='' />
           </div>
          </main>  
        </>
    )
}

export default Middle
