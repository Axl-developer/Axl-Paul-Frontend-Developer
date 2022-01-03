import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { DataContext } from '../../routers/DataContext';

import { ProyectItem } from './ProyectItem'


export const ProyectsScreen = () => {

    const Proyect = styled(motion.div)`
        transition:1s;
    `;

    const container = {
        hidden: {opacity: 0},
        visible: {
          opacity: 1,
        }
      };
 
    const [loading, setLoading] = useState(true)
    const {Data} = useContext(DataContext)
    console.log(Data);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

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
                            :Data.Proyects.map( proyect => <ProyectItem key={proyect} {...proyect}/>)
                    }
                </div>
        </Proyect>
    )
}
