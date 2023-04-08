import React from 'react'
import { useState, useEffect } from 'react'
import '../Style/Footer.css'
import Navbar from './Navbar';



function About() {
    return(
        <div style={{backgroundColor:'#16151f',color:'white'}}>
            <Navbar/>
            <div style={{margin:'20px'}}></div>
          <h1 className='ms-3'>About Us</h1>
          <p className='ms-3'> elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
        </div>
    );
}


export default About