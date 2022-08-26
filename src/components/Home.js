import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { opposite } from '../Utilities/NavReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { gsap } from "gsap";
function Home() {
    const dispatch = useDispatch()
    const check = useSelector(
        (state) => {
            return(
                state.navigation.value
            )
        }
    )

    useEffect(
        () => {
            const tl = gsap.timeline();
            tl.from('#home',{opacity:0, duration:.8, x:60})
            tl.from('#b1',{opacity:0, duration:.8, y:-30})
            tl.from('#lg2',{opacity:0, duration:.8, x:-60})
            tl.from('#lg3',{opacity:0, duration:.8, x:-60})
            tl.from('#lg4',{opacity:0, duration:.8, x:-60})
            tl.from('#landingImage',{opacity:0, duration:.8, x:60})
            tl.from('#lg6',{opacity:0, duration:.8, y:-60})
            tl.from('#lg7',{opacity:0, duration:.8, y:-60})
        },[]
    )

    


  return (
    <div className='container-fluid' id='homepage'>
        <div className="row-fluid" id='bur'>
            <div className="row-fluid" id='burgur'>
                <div className="col-12" id='b1'>
                    <div id='landing_button'>
                        <button
                        onClick={
                            () => {
                                dispatch(opposite())
                            }
                        }
                        id='anim'
                        >
                           <div id='b2' >
                                <div id='b3'>

                                </div>
                           </div>
                        </button>
                    </div>
                </div>
            </div>
            {check === true ?<div id="holder">
                <div className="row" id='landingGlass'>
                    <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6" id='lg1'>
                        <h2 className="col-12" id='lg2'>
                            Hello, I'm,
                        </h2>
                        <h1 className="col-12" id='lg3'>
                            Omidiora Elyon
                        </h1>
                        <h2 className="col-12" id='lg4'>
                            Self-Taught Front End React Developer
                        </h2>
                        <div className="col-12" id='lg5'>
                            <div className="col" id='lg6'>
                                <button>
                                    <Link
                                    to='/about'
                                    >
                                        <button>
                                            About Me
                                        </button>
                                    </Link>   
                                </button>
                            </div>
                            <div className="col" id='lg7'>
                                <button>
                                    <Link
                                    to='/project'
                                    >
                                        <button>
                                        Projects
                                        </button>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 " id='land'>
                        <div>
                            <div id='landingImage' className="col">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            :
            <div id='fullNavigation'>
                <div id='homeNav' >
                    <Link
                    to='/'
                    >
                        Home
                    </Link>
                </div>
                <div
                id='aboutNav'
                >
                    <Link
                    to='/about'
                    >
                        About
                    </Link>
                </div>
                <div
                id='projectNav'
                >
                    <Link
                    to='/project'
                    >
                        Project
                    </Link>
                </div>
                <div
                id='contactNav'
                >
                    <Link
                    to='/contact'
                    >
                        Contact
                    </Link>
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default Home