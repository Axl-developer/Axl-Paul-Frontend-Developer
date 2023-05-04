import React from 'react'
import { ItemSocial } from './ItemSocial'
import { SocialContent } from '../styled-components'

const socials = [{id:'1',class:'fab fa-linkedin',before:'\f08c',url:'https://www.linkedin.com/in/axl-paul-evangelista-g%C3%B3mez-70a78a1b2/'},{id:'2',class:'fa fa-whatsapp',before:'\f232',url:'https://web.whatsapp.com/send?phone=51978544626'},{id:'3',class:'fa fa-github',before:'\f09b',url:'https://github.com/Axl-developer'}]
export const Social = () => {
    return (
        <SocialContent className="social-content">
                {
                    socials.map( social => (
                        <ItemSocial key={social.before} {...social}/>
                    ))
                }
        </SocialContent>
    )
}
