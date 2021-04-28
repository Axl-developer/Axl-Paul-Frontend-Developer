import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch'

import { ProyectItem } from './ProyectItem'


export const ProyectsScreen = () => {

    const Proyect = styled(motion.div)`
        transition:1s;
    `;

    const {state:{data,loading}} = useFetch('./assets/proyects.json')
    
    const container = {
        hidden: {opacity: 0},
        visible: {
          opacity: 1,
        }
      };
 
    //añador la data al reducer
    return (
        <Proyect className="content_proyects" variants={container} initial="hidden" animate="visible" exit={{opacity:0}}>
            <h1>Proyectos</h1>
                <div className="proyects_content">
                    {
                        (loading)
                            ?<div className="spinner">
                                <div className="double-bounce1"></div>
                                <div className="double-bounce2"></div>
                            </div>
                            :data.map( proyect => <ProyectItem key={proyect} {...proyect}/>)
                    }
                </div>
        </Proyect>
    )
}
