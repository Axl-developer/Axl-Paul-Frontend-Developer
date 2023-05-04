import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardContainer = styled(motion.div)`
    cursor:grab;
    transform-style: preserve-3d;
    min-height: 250px;
    width: 200px;
    border-radius: 30px;
    transition: box-shadow 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:#131313;
    margin:20px;
    transition: all 1.5s ease;
    box-shadow: none;
`;