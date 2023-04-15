import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../Style/BlogPage.css'
import { useParams } from 'react-router-dom';
import { LinkedInEmbed } from 'react-social-media-embed';
import { YouTubeEmbed } from 'react-social-media-embed';
import YouTube from 'react-youtube';
// import ReactHtmlParser from 'react-html-parser'




function BlogPage(props) {
    const { id } = useParams();
    const [four, setFour] = useState([]);

    useEffect(() => {
        // const slug = props.match.params.id;
        fetch(`https://hemant878.pythonanywhere.com/blog/four/${id}`, {
            'method': 'GET',

            headers: {
                'Content-Type': 'application/json',
            }
        })

            .then(resp => resp.json())
            .then(resp => setFour(resp))
            .catch(error => console.log(error))

    }, []);

    const opts = {
        height: "400px",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
    


    return (

        <div>
            <Navbar />
            <div className='blogpage'>
                <img className='uniquepro' src={four.fcover} alt="" />


                <div className='subblog' >

                    <h1 className='bloghead'>{four.ftitle}</h1>

                    <div className='phs'>
                        <img></img>
                        <p> hello</p>
                    </div>

                    <div className='blogpara'  dangerouslySetInnerHTML={{__html: four.ftitle2}}></div>


                    <img className='uniquepros' src={four.fcover2} alt="" />

                 <div className='blogpara' dangerouslySetInnerHTML={{__html: four.ftitle3}}></div>



                    {/* <p >{four.ftitle3}</p> */}


                        {/* <YouTubeEmbed className="gtt" url="https://www.youtube.com/watch?v=HpVOs5imUN0"  /> */}
                        {/* <YouTube className="gtt" videoId={four.subtitle} opts={opts}  /> */}
                        <YouTube className="gtt" videoId={four.fsubtitle}  />




                    <div className='blogpara'  dangerouslySetInnerHTML={{__html: four.ftitle3}}></div>



                </div>

                {/* <div style={{ display: 'flex', justifyContent: 'center',width:'90%',margin:'auto',height:'400px',marginTop:'25px' }}>
                    <LinkedInEmbed
                        url={four.ftitle5}
                        width={325}
                        height={570}
                    />
                </div> */}
            </div>


            <div className='sws'></div>
            <Footer />

        </div>
    );
}

export default BlogPage