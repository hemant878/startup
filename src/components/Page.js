import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Carousel from './Carousel'
import Footer from './Footer'


function Page() {
    return(
        <div>
            <Navbar/>
            <Carousel/>
        <Home/>

        <Footer/>

        </div>
    );
}


export default Page