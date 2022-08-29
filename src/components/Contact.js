import React from 'react'
import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { ops } from '../Utilities/contactApproved'


function Contact() {
  const dispatch = useDispatch()
  const checke = useSelector(
    (state) => {
        return(
            state.contat.value
        )
    }
)

  useEffect(
    () =>{
      const tl =gsap.timeline()
      tl.from('#conimg',{opacity:0,x:-30,duration:1})
      tl.from('#conform',{opacity:0,x:30,duration:1})
    },[]
  )

  const form = useRef()
    
    const sendEmail = (event) => {
      dispatch(ops())
        event.preventDefault();
        emailjs
        .sendForm('service_rg8jp3j', 'template_en49vz6', form.current , 'x2Sry9pgMsRig8_82')
            .then((result) => {
            console.log(result.text);
            }, 
            (error) => {
            console.log(error.text);
            },
            form.current.reset()
            );
    }
  return (
    <div>
      <div id="owner">
      <div id='landingContainer' className='container-fluid'>
          <div id="home" className='row'>
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
                        Contact Me
                    </button>
                </div>
              </form>
              <div className='row' id="socials">
                <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/e._lyon/"><i className="fa-brands fa-instagram"></i></a>
                <a rel="noreferrer noopener" target="_blank" href="https://twitter.com/Darkonethesixth"><i className="fa-brands fa-twitter"></i></a>
                <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/elyon-omidiora-657a89248/"><i className="fa-brands fa-linkedin-in"></i></a>
                <a rel="noreferrer noopener" target="_blank" href="https://github.com/The-Scientist2042"><i className="fa-brands fa-github"></i></a>
              </div>
               <h3>
                <a rel="noreferrer noopener" target="_blank" href="http://itiselyon@gmail.com">
                itiselyon@gmail.com
                </a>
               </h3>
            </div>
            <div id={checke}>
            <div id="appear">
            <div id="holdma">
            <div id="cir">
              <h1>
                SENT  
              </h1>
            </div>
            <button id="exc" onClick={() => {
              dispatch(ops())
            }}>
            <i class="fa-solid fa-xmark"></i>
            </button>
            </div>
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