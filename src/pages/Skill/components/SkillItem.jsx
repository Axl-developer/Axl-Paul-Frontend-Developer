import React from 'react'

import { useMotionValue, useTransform } from 'framer-motion'
import { Title } from '../../../styled-components';
import { CardContainer, CardWrapper, SkillImg } from '../styled-component';


export const SkillItem = (skill) => {

    const {name,logo} = skill

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useTransform(y,[-100, 100], [30, -30])
    const rotateY = useTransform(x,[-100, 100], [-30, 30])

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

    return (
        <CardWrapper variants={item} >
            <CardContainer className="skill-card"
                style={{x,y,rotateX, rotateY, z:100 }}
                drag 
                dragElastic={0.16}
                dragConstraints={{top:0,left:0, right:0,bottom:0}}
            >

                <div className="logo">
                    <SkillImg logo={logo}></SkillImg>
                </div>
                <Title size="h2" weight="light">{name}</Title>
            </CardContainer>
        </CardWrapper>
    )
}
