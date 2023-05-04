import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProyectCard = styled(motion.div)`
    transition:1s;
    background: #202020;
    border-radius: 15px;
    overflow: hidden;
    margin: 20px auto;

    @media (min-width: 720px){
        display: flex;
        justify-content: space-between;
    }

    @media (min-width: 1200px){
        
        margin: 20px auto;
    }
`;