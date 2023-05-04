import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { ToolsItem } from './ToolsItem'

import { GetProyectsById } from '../../helpers/getProyectsById'
import { GetSkillById } from '../../helpers/getSkillById'
import { DataContext } from '../../routers/DataContext'

import { Title } from '../../styled-components'
import { Single } from './styled-components/single-layout'
import { Spinner } from '../../components/common/Spinner'


export const ProyectSingle = () => {
    const {idproyect} = useParams()

    const {Data} = useContext(DataContext)
    const {Proyects,Skills,loaded} = Data

    if(!loaded){
    return <Spinner />
   }

   const {name,url_img,body,tools,url_proyect,url_code} = GetProyectsById(Proyects,Number(idproyect))
   const Tools = GetSkillById(Skills,tools)
    
    return (
        <Single  url={url_img} animate={{opacity:1,transform:'translateY(0px)'}} initial={{opacity:0,transform:'translateY(20px)'}} exit={{opacity:0}}>
            
            <div className="single_content">
                <div className="single_sub_content">
                    <div className="content_img">
                        <img src={`${process.env.PUBLIC_URL}/${url_img}`} alt="twitter" />
                    </div>

                    <div className="single_sub_content_body">
                        <Title size="h1" weight="bold" margin="mb2">{name}</Title>

                        <p className="body_single">{body}</p>

                        <div className="single_btns_content">
                            <a className="View_proyect" href={url_proyect} target="_blank" rel="noopener noreferrer">
                                <span>Ver Proyecto</span>
                                <div className="liquid"></div>
                            </a>

                            <a className="View_proyect" href={url_code} target="_blank" rel="noopener noreferrer">
                                <span>Ver Codigo</span>
                                <div className="liquid"></div>
                            </a>
                        </div>

                    </div>
                </div>

                <Title size="h2" weight="bold">Tools</Title>
                <div className="Tools_content">
                    {
                        Tools.map( T => <ToolsItem key={T.id} T={T}/>)
                    }
                </div>
            </div>

        </Single>
    )
}
