import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Single = styled(motion.div)`
    transition:1s;
    background-image: linear-gradient(rgba(12,12,12,0.7),rgba(12,12,12,0.7)),url(${process.env.PUBLIC_URL}/${props => props.url});
`;