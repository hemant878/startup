import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Style/Carousel.css'

function Carousel() {
  const [fours, setFour] = useState([]);

  useEffect(() => {

      fetch('https://hemant878.pythonanywhere.com/blog/four/', {
          'method': 'GET',

          headers: {
              'Content-Type': 'application/json',
          }
      })

          .then(resp => resp.json())
          .then(resp => setFour(resp))
          .catch(error => console.log(error))

  }, [])



  return (
    <div className='rr'>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">


        {fours.slice(0,3).map(four => {
                        return (


          <div class="carousel-item active" key={four.id}>
            <img className='unique' src={four.fcover} alt="" />
            <div class="carousel-caption d-md-block">
            <Link to={`/four/${four.id}`} className='linkhtt'>  <h5 className='htt'>{four.ftitle}</h5></Link>
             
            </div>
          </div>



           
       )
      })}


    
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel