import React,{ useEffect } from 'react';
import gsap from 'gsap'

function About() {

  useEffect(
    () => {
        const tl = gsap.timeline();
        tl.from('#home',{opacity:0, duration:.8, x:60, })
        tl.from('#abouttitle',{opacity:0, duration:.5, y:-30})
        tl.from('h4',{opacity:0, duration:.8, x:60})
        tl.from('#imageHolder',{opacity:0, duration:.8, x:-60})
        tl.from('h3',{opacity:0, duration:.8, x:60})
        tl.from('#one',{opacity:0, duration:.6})
        tl.from('#two',{opacity:0, duration:.6})
        tl.from('#three',{opacity:0, duration:.6})
        tl.from('#four',{opacity:0, duration:.6})
        tl.from('#five',{opacity:0, duration:.6})
        tl.from('#six',{opacity:0, duration:.6})
        tl.from('#seven',{opacity:0, duration:.6})
        tl.from('#eight',{opacity:0, duration:.6})
        tl.from('#nine',{opacity:0, duration:.6})
        tl.from('#resume',{opacity:0, duration:.8, x:60})
    },[]
)
  
  return (
    <div id="owner">
      <div id='landingContainer' className=' container-fluid '>
        <div id="home" className='row'>
            <div id="about">
              <div id="abouttitle">
                About Me
              </div>
              <div className='row' id="aboutContent">
                <div className=" row col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 order-2" id="aboutText">
                  <div className='col-12' id='aboutMe'>
                   <h4>
                   Hello, my name is Elyon Omidiora and I am a self taught Front-End Developer. I am someone who has genuine interest in designing and bringing designs to life through code or any possible means. I socialize easily and I'm very fun to have around. I am hard-working in the sense that I do not procrastinate and I do my very best to get the job done before or on the due date. I am quite easy to communicate with, I learn pretty fast and I like to think I am a loveable person.
                   </h4>
                    <div id="skils">
                      <h3>Skills</h3>
                      <div id="all" className='row'>
                        <div  id="one">Html</div>
                        <div  id="two">Css</div>
                        <div  id="three">Javascript</div>
                        <div id="four">React</div>
                        <div  id="five">Bootstrap</div>
                        <div  id="six">Gsap</div>
                        <div  id="seven">Redux</div>
                        <div  id="eight">Css Preprocessor (Scss)</div>
                        <div  id="nine">Git(Version Control)</div>
                      </div>
                    </div>
                    <div id="resume">
                    <a rel="noreferrer noopener" target="_blank"  
                    href='https://drive.google.com/file/d/1I4JTv3ceR1izzvd3AjeSblAwBpEh7w7v/view'>
                    My Resume
                    </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 order-1" id="aboutImage">
                  <div id="imageHolder">
                    </div> 
                </div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About