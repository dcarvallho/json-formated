import React from 'react'
import Navbar from './navbar';

const Wrapper = ({ children }) =>{
    return(
        <>
            <Navbar />
                {children}
            {/* <Footer /> */}
        </>
    )
}

export default Wrapper;