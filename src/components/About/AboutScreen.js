import React from 'react'
import { Social } from './Social'
import '../../styles/about.css'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export const AboutScreen = () => {

    const About = styled(motion.div)`
        transition:1s;
    `;


    return (
        <About animate={{opacity:1}} initial={{opacity:0}} className="about-content">
            <div className="conatiner-about" style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/js-code.jpg'})`}}>
                <div className="conatiner-about-text">
                    <h1>Acerca de mi</h1>
                    <hr />
                    <h1>Web Frontend Developer desde 2019</h1>
                    <p>
                        Hola! mi nombre es <span>Axl Paul Evangelista Gómez</span> soy desarrollador de software con principal enfoque en el Frontend de aplicaciones web y mobiles.
                        <br/><br/>
                        Soy muy apasionado con mi trabajo, copertativo en el trabajo en equipo y  me gusta estar al dia con las nuevas tecnologías del momento.
                        <br/><br/>
                        Mi lenguaje de programación principal es JavaScript, trabajo principalmente utilizando el framework "React JS" y utilizando la libreria de "Redux" para el manejo de estado las aplicaciones.
                        <br/><br/>
                        En este enlace podras ver algunos de mis proyectos <NavLink to="/proyects">Ver proyectos</NavLink>.
                    </p>
                </div>
                
            </div>
            <Social />
        </About>
    )
}
