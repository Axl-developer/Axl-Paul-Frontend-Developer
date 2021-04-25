import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
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

    return (
        <div className="single_content">
            
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
            <div className="Tools_content">
                {
                    Tools.map( T => <ToolsItem key={T.id} T={T}/>)
                }
            </div>

        </div>
    )
}
