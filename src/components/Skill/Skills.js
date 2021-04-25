import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { SkillItem } from './SkillItem';

export const Skills = () => {

    const {state:{data,loading}} = useFetch('./assets/skills.json')
    return (
        <div>
            {
                   (loading)
                        ?<h2>Cargando...</h2>
                        : data.filter(e => e.type === 'extras')
                            .map(skill => (
                                <SkillItem key={skill.name} {...skill}/>
                            ))
                   
                }
        </div>
    )
}
