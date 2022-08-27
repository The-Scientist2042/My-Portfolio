import React, { useEffect } from 'react';
import data from '../Utilities/projectdata';
import gsap from 'gsap';

function Project() {
  useEffect(
    () => {
      const tl = gsap.timeline();
      tl.from('#home',{opacity:0, duration:.8, x:60})
      tl.from('#projTitle',{opacity:0, duration:.8, x:60})
      tl.from('#manager',{opacity:0, duration:.8, y:60})
    }
  )

  const Projects = data.map(
    (progress) => {
      return(
        <div id="manager" className='col-12 col-sm-12 col-lg-4 col-xl-3 col-xxl-3'>
          <div id="image--manager">
            <img id='projectImg' src={progress.image} alt="" />
          </div>
          <div id="progressName">
            <h2>
              {progress.name}
            </h2>
          </div>
          <div id="liveLink">
            <a
            rel="noreferrer noopener" target="_blank" 
            href={progress.link}>
              View Live
            </a>
          </div>
        </div>
      )
    }
  )
  return (
    <div>
      <div id="owner">
      <div id='landingContainer' className='container-fluid'>
          <div id="home" className='row'>
              <div id="proj" className='row'>
                <div id="projTitle" className='col-12 '>
                  <h2>
                    My Projects
                  </h2>
                </div>
                  { Projects }
                </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Project