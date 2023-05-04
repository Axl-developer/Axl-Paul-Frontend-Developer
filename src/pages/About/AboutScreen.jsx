import React from 'react'
import { Social } from './components/Social'

import '../../styles/about.css'
import { Title } from '../../styled-components/title'
import { Link, P } from '../../styled-components'
import { About } from './styled-components/about-layout'
import { ContainText, ContentBackground } from './styled-components'


export const AboutScreen = () => {
    return (
        <About animate={{opacity:1}} initial={{opacity:0}} className="about-content">
            <ContentBackground url='assets/js-code.jpg'>
                <ContainText>
                    <Title size="h1">Acerca de mi</Title>
                    <hr className='hr' />
                    <Title size="h1" weight="bold" margin="mb2">Web Frontend Developer desde 2019</Title>
                    <P color='grey' size="20">
                        Hola! mi nombre es Axl Paul Evangelista Gómez soy desarrollador de software con principal enfoque en el Frontend de aplicaciones web y mobiles.
                        <br/><br/>
                        Soy muy apasionado con mi trabajo, copertativo en el trabajo en equipo y  me gusta estar al dia con las nuevas tecnologías del momento.
                        <br/><br/>
                        Mi lenguaje de programación principal es JavaScript, trabajo principalmente utilizando el framework "React JS" y utilizando la libreria de "Redux" para el manejo de estado las aplicaciones. Con preferencia en el uso se "Sass" para los estilos y "Typescript" para el tipado.
                        <br/><br/>
                        En este enlace podras ver algunos de mis proyectos <Link to="/proyects" color="greenyellow" margin="5">Ver proyectos</Link>.
                    </P>
                </ContainText>
            </ContentBackground>
            <Social />
        </About>
    )
}
