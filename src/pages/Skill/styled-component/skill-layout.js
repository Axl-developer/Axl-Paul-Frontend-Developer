import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SkillsScreen = styled(motion.div)`
    transition:1s;
    padding: 20px;

    @media(min-width:1200px){
        max-width: 1200px;
        margin: auto;
    }
`;
