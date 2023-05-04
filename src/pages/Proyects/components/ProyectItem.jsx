import React from 'react'
import { Link } from 'react-router-dom'

import '../../../styles/proyects.css'
import { Title } from '../../../styled-components';
import { ProyectCard } from '../styled-components/proyect-card';


export const ProyectItem = (props) => {

    const {id,url_img,name,body} = props

    return (
        <ProyectCard className="content_proyect" animate={{opacity:1,transform:'translateY(0px)'}} initial={{opacity:0,transform:'translateY(20px)'}} exit={{opacity:0}}>
            <div className="sub_content_proyect">
                <div className="content_img">
                    <img src={`${process.env.PUBLIC_URL + url_img}`} alt="twitter" />
                </div>
                <div className="content_text">
                    <Title size="h1" weight="bold" margin="mb2">{name}</Title>
                    <p>{body}</p>
                    <Link className="link_view" to={`/proyect/${id}`}>
                        Ver detalles
                    </Link>
                </div>
            </div>
            <div className="back_effect"></div>
        </ProyectCard>
    )
}
