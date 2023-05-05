import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Single = styled(motion.div)`
    background-image: linear-gradient(rgba(12,12,12,0.7),rgba(12,12,12,0.7)),url(${process.env.PUBLIC_URL}/${props => props.url});
    height: 100%;
    transition:1s;
`;