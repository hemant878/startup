import React from 'react'
import { useState, useEffect } from 'react'
import '../Style/Footer.css'



function Footer() {
    return(
        <div>
          <div className='footer'>
            <div>
            <h1 className='text-light sp'>By <br/>Hemant Tighade</h1>
            </div>

            <div className='tr'>
              <p> Instagram </p>
              <p>FaceBook</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
    );
}


export default Footer