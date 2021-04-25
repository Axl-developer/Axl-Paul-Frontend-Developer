import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../../styles/skills.css'
import { SkillItem } from './SkillItem'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SkillScreen = () => {

    const {state:{data,loading}} = useFetch('./assets/skills.json')

    const [filtro, setFiltro] = useState('frontend')

    const Skills = styled(motion.div)`
        transition:1s;
    `;
    

    return (
        <Skills className="skill-content" animate={{opacity:1}} initial={{opacity:0}}>
            <h1>Mis Skills como developer</h1>
            <hr />
            <div className="tab-content">
                <div>
                    <h2 onClick={() => setFiltro('frontend')}>Frontend</h2>
                </div>

                <div>
                    <h2 onClick={() => setFiltro('backend')} >Backend</h2>
                </div>

                <div>
                    <h2 onClick={() => setFiltro('database')}>Database</h2>
                </div>

                <div>
                    <h2 onClick={() => setFiltro('extras')}>Extras</h2>
                </div>
            </div>
            <div className="skills">
                {
                   (loading)
                        ?<div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                        : data.filter(e => e.type === filtro)
                            .map(skill => (
                                <SkillItem key={skill.name} {...skill}/>
                            ))
                   
                }
                
            </div>
        </Skills>
    )
}
