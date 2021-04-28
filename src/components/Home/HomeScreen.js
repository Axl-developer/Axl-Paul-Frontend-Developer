import React from 'react'
import { Fox } from './Fox'
import { Greet } from './Greet'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HomeScreen = () => {

    const Home = styled(motion.div)`
        background-image: url('./assets/home.jpg');
        position:relative;
        transition:1s;
        background-position: center
    `;


    return (
        <Home id="home" animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}}>
            <div>
                <div className="content">
                    <Fox />
                    <Greet />
                </div>
            </div>
        </Home>
    )
}
