import React from 'react'
import { NavLink } from 'react-router-dom'
import { ItemSocial } from './ItemSocial'

const socials = [{id:'1',class:'fab fa-linkedin',before:'\f08c',url:'#'},{id:'2',class:'fa fa-whatsapp',before:'\f232',url:'#'},{id:'3',class:'fa fa-github',before:'\f09b',url:'#'}]
export const Social = () => {
    return (
        <div className="social-content">
            <ul>
                {
                    socials.map( social => (
                        <NavLink key={social.id} to={social.url}><li><ItemSocial key={social.before} {...social} /></li></NavLink>
                    ))
                }
            </ul>
            
        </div>
    )
}
