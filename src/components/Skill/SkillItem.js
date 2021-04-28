import { motion, useMotionValue, useTransform } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

export const SkillItem = (skill) => {

    const {name,logo} = skill


    const x = useMotionValue(0)

    const y = useMotionValue(0)

    const rotateX = useTransform(y,[-100, 100], [30, -30])
    const rotateY = useTransform(x,[-100, 100], [-30, 30])

    const CardWrapper = styled(motion.div)`
        perspective: 2000;
        transition:1s;
    `;

    const CardContainer = styled(motion.div)`
        cursor:grab
    `;

    const Img = styled(motion.div)`
        background-image: url(https://axl-developer.github.io/Axl-Paul-Frontend-Developer/assets/logos/${logo});
    `;

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
                    <Img className="img" ></Img>
                </div>
                <h2 className="title">{name}</h2>
            </CardContainer>
        </CardWrapper>
    )
}
