import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SkillImg = styled(motion.div)`
    background-image: url(${process.env.PUBLIC_URL}/assets/logos/${props => props.logo});
    background-size: cover;
    width: 90px;
    height: 90px;
    transition: all 0.75s ease-out;
    border-radius: 50%;
    overflow: hidden;
    transform: translateZ(0px);
`;