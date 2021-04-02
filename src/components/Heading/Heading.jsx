import React, {useState, useEffect}from 'react';
import { Button , Typography } from "@material-ui/core";

import logo from  '../../assets/Vector.png'
const Heading = () => {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
            window.addEventListener('scroll', handleScroll )
            return() => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
           <main>
               <h1 className='hd-text'>
               Many reasons to get up and start to get back in the business 
               </h1>
               <div className='img-head' style={{transform:`translateX(-${offsetY * 0.2}px)`}}>
               <img src={logo} alt='' className='style-img' />
               </div>
               <Typography className='typography'>               <div  className='btn-cover'>
               <Button className='btn-button' variant="contained" style={{background:'#F2994A', color:'#fff'}} > learn more</Button>
               </div>
               <div>
               <Button className='button-btn' variant="outlined" style={{color:'#F2994A', borderColor:'#F2994A'}}> Demo</Button>
               </div>
               </Typography>

               <div className="soild-img">
               <div className='playbutton-img'>
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM28 20L16 11V29L28 20Z" fill="white"/>
               </svg>
               </div>
               <svg width="140" height="80" viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="140" height="80" rx="4" fill="#361C5D"/>
              </svg>
              <div className='txt-inline'>
              <p>The harder you work for something, the greater you’ll feel when you achieve it.</p>
              </div>
              <div className='txt-watch'>
              <p>Watch preview</p>
              </div>
               </div>
           </main> 
               
        </>
    )
}

export default Heading;
