import React from 'react'
import {Heading, Navbar, Middle, Description,Feature, Footer} from './components'

function  App () {
    return (
        <div className='components'>
            <Navbar />
            <Heading /> 
            <Middle />
            <Description />
            <Feature />
            <Footer />
        </div>
    )
}

export default App;
