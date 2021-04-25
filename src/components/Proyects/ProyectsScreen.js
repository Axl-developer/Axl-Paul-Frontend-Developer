import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch'

import { ProyectItem } from './ProyectItem'


export const ProyectsScreen = () => {

    const Proyect = styled(motion.div)`
        transition:1s;
    `;

    const {state:{data,loading}} = useFetch('https://axl-developer.github.io/Axl-Paul-Frontend-Developer/assets/proyects.json')
    
 
    //añador la data al reducer
    return (
        <Proyect className="content_proyects" animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}}>
            <h1>Proyects</h1>
            <div className="proyects_content">
                {
                    (loading)
                        ?<h1>loading</h1>
                        :data.map( proyect => <ProyectItem key={proyect} {...proyect}/>)
                }
                
                
            </div>
        </Proyect>
    )
}
