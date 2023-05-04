import { motion } from "framer-motion";
import styled from "styled-components";

export const ContentBackground = styled(motion.div)`
    background-image:linear-gradient(150deg,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${process.env.PUBLIC_URL}/${props => props.url});
    background-size: cover;
    padding: 20px;
    @media(min-width:720px){
        padding: 20px 50px;
        margin-top: 100px;
    }
    @media(min-width:1200px){
        height: 100%;
        width: 100%;
        margin: auto;
    }
`;