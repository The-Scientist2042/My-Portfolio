import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './Styling/index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import nav from './Utilities/NavReducer'
import con from './Utilities/contactApproved'

function Index(){
     const store = configureStore(
        {
            reducer:{
                navigation:nav,
                contat:con
            }
        }
     )
    return(
        <Provider store={store}>
            <div>
            <BrowserRouter>
                <Routes>
                    <Route
                    path="/"
                    element={<App/>}
                    />
                    <Route
                    path="about"
                    element={<About/>}
                    />
                    <Route
                    path="project" 
                    element={<Project/>}
                    />
                    <Route
                    path="contact"
                    element={<Contact/>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Index/>)