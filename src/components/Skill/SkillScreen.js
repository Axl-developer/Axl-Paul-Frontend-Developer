import React, { useContext, useEffect, useState } from 'react'
import '../../styles/skills.css'
import { SkillItem } from './SkillItem'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { DataContext } from '../../routers/DataContext'

export const SkillScreen = () => {

    const [filtro, setFiltro] = useState('frontend')

    const Skills = styled(motion.div)`
        transition:1s;
    `;
    
    const container = {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      

    const [loading, setLoading] = useState(true)
    const {Data} = useContext(DataContext)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

    return (
        <Skills className="skill-content" animate={{opacity:1}} initial={{opacity:0}}>
            <h1>Mis habilidades como developer</h1>
            <hr />
            <div className="tab-content">
                <div>
                    <h2 className={(filtro === 'frontend')&&"active"} onClick={() => setFiltro('frontend')}>Frontend</h2>
                </div>

                <div>
                    <h2 className={(filtro === 'backend')&&"active"} onClick={() => setFiltro('backend')} >Backend</h2>
                </div>

                <div>
                    <h2 className={(filtro === 'database')&&"active"} onClick={() => setFiltro('database')}>Database</h2>
                </div>

                <div>
                    <h2 className={(filtro === 'extras')&&"active"} onClick={() => setFiltro('extras')}>Extras</h2>
                </div>
            </div>
            <div>
                {
                   (loading)
                        ?<div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                        : <motion.div className="skills" variants={container} initial="hidden" animate="visible">
                            {
                                Data.Skills.filter(e => e.type === filtro)
                                .map(skill => (
                                    <SkillItem key={skill.name} {...skill}/>
                                ))
                            }
                        </motion.div>
                   
                }
                
            </div>
        </Skills>
    )
}
