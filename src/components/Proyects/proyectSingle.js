import { motion } from 'framer-motion'
import React, { useContext, useRef } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { GetProyectsById } from '../../helpers/getProyectsById'
import { GetSkillById } from '../../helpers/getSkillById'
import { DataContext } from '../../routers/DataContext'
import { ToolsItem } from './ToolsItem'

export const ProyectSingle = () => {

    const {idproyect} = useParams()

   const {Data} = useContext(DataContext)

   const {Proyects,Skills} = Data


   const {name,url,body,tools} = GetProyectsById(Proyects,Number(idproyect))

   const Tools = GetSkillById(Skills,tools)


    const Single = styled(motion.div)`
        transition:1s;
    `;

    const contentRef = useRef(null)

    return (
        <Single className="single_content" animate={{opacity:1,transform:'translateY(0px)'}} initial={{opacity:0,transform:'translateY(20px)'}} exit={{opacity:0}}>
            
            <div className="single_sub_content">
                <div className="content_img">
                    <img src={url} alt="twitter" />
                </div>

                <div className="single_sub_content_body">
                    <h1>{name}</h1>

                    <p className="body_single">{body}</p>

                    <div className="single_btns_content">
                        <NavLink className="View_proyect" to='/'>
                            <span>Ver Proyecto</span>
                            <div className="liquid"></div>
                        </NavLink>

                        <NavLink className="View_proyect" to='/'>
                            <span>Ver Codigo</span>
                            <div className="liquid"></div>
                        </NavLink>
                    </div>

                </div>
            </div>

            <h2>Tools</h2>
            <motion.div className="Tools_content" ref={contentRef}>
                {
                    Tools.map( T => <ToolsItem cont={contentRef} key={T.id} T={T}/>)
                }
            </motion.div>

        </Single>
    )
}
