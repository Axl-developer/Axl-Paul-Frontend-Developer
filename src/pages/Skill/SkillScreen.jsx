import React, { useState } from 'react'

import '../../styles/skills.css'
import { Title } from '../../styled-components'
import { SkillsScreen, Span } from './styled-component'
import { Skills } from './components/Skills'


export const SkillScreen = () => {

    const [filtro, setFiltro] = useState('frontend')


    return (
        <SkillsScreen className="skill-content" animate={{opacity:1}} initial={{opacity:0}}>
            <Title size="h1" weight="bold">Mis habilidades como developer</Title>
            <hr />
            <div className="tab-content">
                <Span className={(filtro === 'frontend')?"active":null} onClick={() => setFiltro('frontend')}>Frontend</Span>

                <Span className={(filtro === 'backend')?"active":null} onClick={() => setFiltro('backend')} >Backend</Span>

                <Span className={(filtro === 'database')?"active":null} onClick={() => setFiltro('database')}>Database</Span>

                <Span className={(filtro === 'extras')?"active":null} onClick={() => setFiltro('extras')}>Extras</Span>
            </div>
            <Skills filtro={filtro}/>
        </SkillsScreen>
    )
}
