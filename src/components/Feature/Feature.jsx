import React, {useState, useEffect} from 'react'

import logo from "../../assets/Feature_9.png";
import logo1 from "../../assets/Group 15.png";

const Feature = () => {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
            window.addEventListener('scroll', handleScroll )
            return() => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
        <div className="img_feature" >
            <img src={logo} alt='...' />
        </div>
        <div className='image-feature' style={{transform:`translateY(-${offsetY * 0.2}px)`}}>
            <img src={logo1} alt='......' />
        </div>
        <div className='image-feature'>
            <img src={logo1} alt='......' />
        </div>
        </>
    )
}

export default Feature
