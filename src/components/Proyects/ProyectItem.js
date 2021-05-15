import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import '../../styles/proyects.css'

export const ProyectItem = (props) => {

    const ProyectI = styled(motion.div)`
        transition:1s;
    `;

    const {id,url_img,name,body} = props

    return (
        <ProyectI className="content_proyect" animate={{opacity:1,transform:'translateY(0px)'}} initial={{opacity:0,transform:'translateY(20px)'}} exit={{opacity:0}}>
            <div className="sub_content_proyect">
                <div className="content_img">
                    <img src={`https://portafolio-axl.herokuapp.com/${url_img}`} alt="twitter" />
                </div>
                <div className="content_text">
                    <h1>{name}</h1>
                    <p>{body}</p>
                    <Link className="link_view" to={`/proyect/${id}`}>
                        Ver detalles
                    </Link>
                </div>
            </div>
            <div className="back_effect"></div>
        </ProyectI>
    )
}
