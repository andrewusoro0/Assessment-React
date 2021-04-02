import React from 'react';
import {  Typography, Button } from "@material-ui/core";

import logo from '../../assets/Metrics_2.png'
import logo2 from '../../assets/img_get_started.png'
import logo3 from '../../assets/Text.png'

const Description = () => {
    return (
        <>
        <main className='shortDown'>
        <div className='text-simple'>
          <h3 className='txt-simple'>3 Simple Ways To <span style={{color:'#F2994A'}}>Save</span> A Bunch Of</h3>
           <h3><span style={{color:'#F2994A'}}>Money</span> When Buying A New Computer</h3>  
        </div>
        <Typography className='text-fully'>Fully customizable and neatly organized components</Typography>
        <Typography className='text-fullys'>will help you work faster without limiting creative freedom</Typography>
        <div className='image_m'>
          <img className='iamge-m' src={logo} alt='........sourceFile'/>
        </div>
        <div> 
          <h4 className='text-create'>Create your <span style={{color:'#F2994A'}}>next project with startup</span> framework</h4>
        </div>
        <Button className='btn-create' variant="contained" 
        style={{background:'#F2994A',
         color:'#fff',
         position: 'absolute',
         top: '317%',
         borderRadius: '3px',
         left:'47%'
          }} > 
         get more
         </Button>
         <div className='img_get'>
              <img className='image_get'  src={logo2} alt='.... sourceFile'/>
         </div>
         <div className='img_invest'>
              <img className='invest' src={logo3} alt='...sourceFile'/>
         </div>
        </main>
        </>
    )
}

export default Description
