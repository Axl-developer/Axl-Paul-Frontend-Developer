import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SkillContent = styled(motion.div)`
    margin: 40px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media(min-width:720px){
        justify-content: left;
    }
`;
