import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Home = styled(motion.div)`
    background-image: linear-gradient(rgba(12, 12, 12, 0.7), rgba(12, 12, 12, 0.7)), url('./assets/home.jpg');
    transition:1s;
    background-position: center;
    background-size: cover;
    min-height: 100%;
`;