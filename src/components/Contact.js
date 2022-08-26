import React from 'react'
import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';


function Contact() {

  useEffect(
    () =>{
      const tl =gsap.timeline()
      tl.from('#conimg',{opacity:0,x:-30,duration:1})
      tl.from('#conform',{opacity:0,x:30,duration:1})
    },[]
  )

  const form = useRef()
    
    const sendEmail = (event) => {
        event.preventDefault();
        emailjs
        .sendForm('service_rg8jp3j', 'template_en49vz6', form.current , 'x2Sry9pgMsRig8_82')
            .then((result) => {
            console.log(result.text);
            }, 
            (error) => {
            console.log(error.text);
            },
            event.target.reset()
            );
    }
  return (
    <div>
      <div id="owner">
      <div id='landingContainer'>
        <div id="taker">
          <div id="circles">
              <div id="one">

              </div>
              <div id="two">

              </div>
              <div id="three">

              </div>
              <div id="four">

              </div>
          </div>
          <div id="home">
          <div id="contact" className='row'>
            <div className='col' id="conimg">
              <div id="conimage">

              </div>
            </div>
            <div className="col" id="conform">
              <form ref={form} className="row" onSubmit={sendEmail} id='form--row'>
                <div className="col-12" id="form--first--col">
                    Email: <input
                    type="email"
                    name="email" 
                    placeholder="Email"
                    
                    />
                </div>
                <div className="col-12" id="form--second--col">
                    Name: <input
                    type="text"
                    name="name" 
                    placeholder="Enter Name"
                    />
                </div>
                <div className="col-12" id="form--third--col">
                    Message: <textarea
                    type="text-area"
                    name="message" 
                    placeholder="Enter Message"
                    />
                </div>
                <div className="col-12" id="form--fourth--col">
                    <button
                    onClick={sendEmail}
                    >
                        Sign Up
                    </button>
                </div>
              </form>
              <div className='row' id="socials">
                <a href="https://www.instagram.com/e._lyon/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/Darkonethesixth"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/elyon-omidiora-657a89248/"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/The-Scientist2042"><i className="fa-brands fa-github"></i></a>
              </div>
               <h3>itiselyon@gmail.com</h3>
            </div>
          </div>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Contact