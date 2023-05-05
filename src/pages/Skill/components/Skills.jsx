import React, { useContext } from 'react'
import { SkillItem } from './SkillItem';

import { DataContext } from '../../../routers/DataContext'

import { Spinner } from '../../../components';
import { SkillContent } from '../styled-component';


const container = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const Skills = ({filtro}) => {

    const {Data} = useContext(DataContext)

    return (
        <>
            {
              (!Data.loaded)
                  ?<Spinner />
                  : <SkillContent className="skills" variants={container} initial="hidden" animate="visible">
                      {
                          Data.Skills.filter(e => e.type === filtro)
                          .map(skill => (
                              <SkillItem key={skill.name} {...skill}/>
                          ))
                      }
                  </SkillContent>
            }
        </>
    )
}
