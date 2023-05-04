import { motion } from "framer-motion";
import styled from "styled-components";

export const About = styled(motion.div)`
    transition:1s;

    @media(min-width:720px){
        display: flex;
        height: 100%;
    }
`;