import React from 'react'
import { useState, useEffect } from 'react'
import '../Style/Home.css'
// import {Link} from 'react-router-dom';

import { Link } from 'react-router-dom'
// import '../CssCompound/Box11.css'


function Home() {
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
        <div className='front'>
            <div className='mainbox'>

            {fours.slice(3,12).map(four => {
                        return (


                <div className='box' key={four.id}>
                    <img className='ph' src={four.fcover} alt="" />
                    <div className='mid'>
                    {/* <Link to={`/exam/${exam.id}`}><h2 className="h9">{exam.ttitle}</h2>  */}
                      <Link to={`/four/${four.id}`} className='llkk'>  <p  className='logo'>Logo</p>
                        <h2 >{four.ftitle}</h2></Link>
                        <p>{four.ftitle5}</p>


                        <div className='minibox'>
                            <div className='photo'>
                                <img></img>
                                <p> hello</p>
                            </div>
                            <div className='dates'>
                                <p>44/5/6/</p>
                            </div>

                        </div>
                    </div>
                </div>
  
            
              )
             })}


               
            </div>
            <div className='btn-s'>
                <Link to={`/Blogs`}>
            <button type="button" class="btn-c">Show More</button>
            </Link>
            </div>
        </div>

    );

};

export default Home