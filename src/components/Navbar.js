import React from 'react'
import { useState, useEffect } from 'react'
import '../Style/Footer.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <div>
         <nav class="navbar navbar-expand-lg bg-black">
  <div class="container-fluid p-2">
    <Link  class="navbar-brand  aws sp" to="#">Start-Up</Link>
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav navc">
        <li class="nav-item">
          <Link  class="nav-link  aws" aria-current="page" to={`/`}>Home</Link>
        </li>
        <li class="nav-item text-light">
          <Link class="nav-link  aws" to={`/About`}>About</Link>
        </li>
        <li class="nav-item text-light">
          <Link class="nav-link  aws" to={`/Contact`}>Contact</Link>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>

        </div>

    );
}


export default Navbar